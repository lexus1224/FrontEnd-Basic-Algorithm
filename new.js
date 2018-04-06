function myNew() {
  let obj = new Object();
  let constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  let ret = constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}