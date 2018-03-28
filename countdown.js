(function (window, undefined) {

  let final = function (status, value) {
    let promise = this, fn, st;

    if (promise._status !== 'PENDING') return;

    setTimeout(function () {
      promise._status = status;
      st = promise._status === 'FULFILLED'
      queue = promise[st ? '_resolves' : '_rejects'];

      while (fn = queue.shift()) {
        value = fn.call(promise, value) || value;
      }

      promise[st ? '_value' : '_reason'] = value;
      promise['_resolves'] = promise['_rejects'] = undefined;
    });
  };

  let Promise = function (resolver) {
    if (!(typeof resolver === 'function' ))
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    if (!(this instanceof Promise)) return new Promise(resolver);

    let promise = this;
    promise._value;
    promise._reason;
    promise._status = 'PENDING';
    promise._resolves = [];
    promise._rejects = [];

    let resolve = function (value) {
      final.apply(promise, ['FULFILLED'].concat([value]));
    };

    let reject = function (reason) {
      final.apply(promise, ['REJECTED'].concat([reason]));
    };

    resolver(resolve, reject);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    let promise = this;
    return new Promise(function (resolve, reject) {

      function handle(value) {
        let ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;

        if (ret && typeof ret ['then'] === 'function') {
          ret.then(function (value) {
            resolve(value);
          }, function (reason) {
            reject(reason);
          });
        } else {
          resolve(ret);
        }
      }

      function errback(reason) {
        reason = typeof onRejected === 'function' && onRejected(reason) || reason;
        reject(reason);
      }

      if (promise._status === 'PENDING') {
        promise._resolves.push(handle);
        promise._rejects.push(errback);
      } else if (promise._status === FULFILLED) { // 状态改变后的then操作，立刻执行
        callback(promise._value);
      } else if (promise._status === REJECTED) {
        errback(promise._reason);
      }
    });
  };

  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  };

  Promise.prototype.delay = function (ms, value) {
    return this.then(function (ori) {
      return Promise.delay(ms, value || ori);
    })
  };

  Promise.delay = function (ms, value) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(value);
        console.log('1');
      }, ms);
    })
  };

  Promise.resolve = function (arg) {
    return new Promise(function (resolve, reject) {
      resolve(arg)
    })
  };

  Promise.reject = function (arg) {
    return Promise(function (resolve, reject) {
      reject(arg)
    })
  };

  Promise.all = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to all.');
    }
    return Promise(function (resolve, reject) {
      let i = 0,
          result = [],
          len = promises.length,
          count = len;

      function resolver(index) {
        return function (value) {
          resolveAll(index, value);
        };
      }

      function rejecter(reason) {
        reject(reason);
      }

      function resolveAll(index, value) {
        result[index] = value;
        if (--count === 0) {
          resolve(result)
        }
      }

      for (; i < len; i++) {
        promises[i].then(resolver(i), rejecter);
      }
    });
  };

  Promise.race = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to race.');
    }
    return Promise(function (resolve, reject) {
      let i = 0,
          len = promises.length;

      function resolver(value) {
        resolve(value);
      }

      function rejecter(reason) {
        reject(reason);
      }

      for (; i < len; i++) {
        promises[i].then(resolver, rejecter);
      }
    });
  };

  window.Promise = Promise;

})(window);


let getData100 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('100ms');
    }, 1000);
  });
};

let getData200 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('200ms');
    }, 2000);
  });
};

let getData300 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('reject');
    }, 3000);
  });
};

getData100().then(function (data) {
  console.log(data);      // 100ms
  return getData200();
}).then(function (data) {
  console.log(data);      // 200ms
  return getData300();
}).then(function (data) {
  console.log(data);
}, function (data) {
  console.log(data);      // 'reject'
});

Promise.all([getData100(), getData200()]).then(function (data) {
  console.log(data);      // [ "100ms", "200ms" ]
});

Promise.race([getData100(), getData200(), getData300()]).then(function (data) {
  console.log(data);      // 100ms
});
Promise.resolve('resolve').then(function (data) {
  console.log(data);      //'resolve'
});
Promise.reject('reject函数').then(function (data) {
  console.log(data);
}, function (data) {
  console.log(data);     //'reject函数'
});