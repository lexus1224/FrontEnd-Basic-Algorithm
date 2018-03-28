Array.prototype.mymap = function (callback, othis) {
  let arr = this;
  for (let i in arr) {
    arr[i] = callback(arr[i], i, arr);
  }
  return arr;
}


function copy(oldObj) {
  let newObj = oldObj.constructor === Array ? [] : {};
  if (typeof oldObj !== 'object')
    return oldObj;
  else {
    for (let item in oldObj) {
      newObj[item] = Object.prototype.toString.call(oldObj[item]) === '[object Object]' ? copy(oldObj[item]) : oldObj[item];
      // newObj[item] = typeof oldObj[item] === 'object' ? copy(oldObj[item]) : oldObj[item];
    }
  }
  return newObj;
}

let obj = {
  a: 1,
  b: '123',
  c: false,
  d: /\d/,
  e: new Date(),
  f: {
    x: true,
    y: {
      z1: 'zz',
      z2: 123
    }
  },
  g: function () {
    console.log('hehe');
  },
  h: [1, 2, 3, 'shenme']
}

let n = copy(obj)
console.log(n)


Function.prototype.mybind = function (oThis) {
  var fToBind = this;
  var fNOP = function () {
  };
  var args = [].slice.call(arguments, 1);
  var fBound = function () {
    return fToBind.apply(this instanceof fNOP ? this : oThis || window, args.concat([].slice.call(arguments)))
  }
  fNOP.prototype = fToBind.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}


var addHandler = function (element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);

  }
  else if (element.attachEvent) {
    element.attachEvent('on' + type, handler);
  }
  else {
    element['on' + type] = handler;
  }
}
let ul = document.querySelector('ul');
let handler = function (ev) {
  let evt = ev || window.event;
  evt.stopPropagation();
  evt.cancelable = true;
  evt.preventDefault();
  console.log(evt.target.nodeName);
}
// addHandler(ul,'click',handler);

// let input = document.querySelector('input');
// input.addEventListener('keyup', throttle(cons, 500, 1000));
function throttle(method, delay, maxtime) {
  let timer = null,
      begin = new Date();
  return function () {
    let ctx = this,
        now = new Date(),
        args = [].slice.call(arguments);
    clearTimeout(timer);
    if (now - begin >= maxtime) {
      method.apply(ctx, args);
      begin = now;
    }
    else {
      timer = setTimeout(function () {
        method.apply(ctx, args)
      }, delay);
    }
  }
}