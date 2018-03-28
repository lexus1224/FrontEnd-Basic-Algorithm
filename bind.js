Function.prototype.bind = function (oThis) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.bind is not callable");
  }
  let args = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {
      },
      fBound = function () {
        return fToBind.apply(this instanceof fNOP ? this : oThis || window, args.concat(Array.prototype.slice.call(arguments)));
      };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
};