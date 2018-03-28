function myNew() {
  let obj = new Object();
  let constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  constructor.apply(obj, arguments);
  return obj;
}