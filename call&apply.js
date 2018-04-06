Function.prototype.call = function (ctx) {
  ctx.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  let res = ctx.fn(...args);
  delete ctx.fn;
  return res;
};

Function.prototype.apply = function (ctx) {
  ctx.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args = args.concat(arguments[i]);
  }
  let res = ctx.fn(...args);
  delete ctx.fn;
  return res;
};

let foo = {
  value: 1
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.apply(foo, ['kevin', 18]);