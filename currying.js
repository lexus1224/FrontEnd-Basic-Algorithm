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

  f.valueOf = function () {
    return fn.apply(this, _args)
  };

  return f;
};

function add() {
  let arr = Array.from(arguments);
  return arr.reduce(function (total, now) {
    return total + now;
  });
}

let curryAdd = curry(add);
curryAdd(1, 2)(3);
curryAdd(4)(6, 7);
console.log(curryAdd())















