let curry = function (fn) {
  let _args = [];

  function f() {
    if (arguments.length === 0) {
      return fn.apply(this, _args);
    }
    // Array.prototype.push.apply(_args, Array.prototype.slice.call(arguments));
    _args = _args.concat([].slice.call(arguments));
    return arguments.callee;
  }

  // f.toString = function () {
  //   return fn.apply(this, _args)
  // };

  return f;
};

function add() {
  let sum = 0;
  for (let i = 0, len = arguments.length; i < len; i++) {
    sum += arguments[i];
  }
  return sum;
}

let curryAdd = curry(add);
curryAdd(1, 2)(3)(4)(5, 6, 7);
console.log(curryAdd());















