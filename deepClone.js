function deepClone(obj) {
  if (!obj || typeof obj !== 'object')
    return obj;
  let cloneObj = obj.constructor === Array ? [] : {};
  for (let item in cloneObj)
    cloneObj[item] = Object.prototype.toString.call(obj[item]) === '[object Object]' ? deepClone(obj[item]) : obj[item];
  return cloneObj;
}

let obj = {
  a: undefined,
  b: '123',
  c: null,
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
};

console.log(deepClone(obj));
