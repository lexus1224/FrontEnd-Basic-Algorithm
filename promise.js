function Promise(fn) {
  var promise = this,
      value = null;
  promise._resolves = [];

  this.then = function (onFulfilled) {
    promise._resolves.push(onFulfilled);
    return this;
  };

  function resolve(value) {
    promise._resolves.forEach(function (callback) {
      callback(value);
    });
  }

  fn(resolve);
}

function myPromise(fn) {
  let promise = this;
  promise._resolves = [];
  promise._rejects = [];
  promise._status = 'pending';

  this.then = function (onFulfilled, onRejected) {
    return new Promise(function (resolve, reject) {
      function handle(value) {
        let ret = typeof handle === 'function' ? onFulfilled(value) : value;
        if (ret && typeof ret.then === 'function') {
          ret.then(function (value) {
            resolve(value);
          }, function (reason) {
            reject(reason);
          })
        }
        else {
          resolve(ret);
        }
      }

      function error(reason) {
        reason = typeof reason === 'function' ? onRejected(reason) : reason;
        reject(reason);
      }

      if (promise._status = 'pending') {
        promise._resolves.push(handle);
        promise._rejects.push(error);
      }
      else if (promise._status = 'fulfilled') {
        handle(promise._value);
      }
      else if (promise._status = 'rejected') {
        error(promise._reason);
      }
    })
  };

  function resolve(value) {
    setTimeout(() => {
      promise._status = 'fulfilled';
      promise._resolves.forEach((callback) => {
        promise._value = callback(value);
      })
    }, 0)
  }

  function reject(value) {
    setTimeout(() => {
      promise._status = "rejected";
      promise._rejects.forEach(function (callback) {
        promise._reason = callback(value);
      })
    }, 0);
  }

  fn(resolve, reject);
}