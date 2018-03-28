Object.create = function (proto) {
  if (typeof proto !== 'function')
    throw new Error('');

  function F() {
  }

  F.prototype = proto;
  return new F();
}