Array.prototype.map = function (callback, othis) {
  let arr = Object(this);
  for (let i in arr) {
    arr[i] = callback.call(othis, arr[i], i, arr);
  }
  return arr;
}