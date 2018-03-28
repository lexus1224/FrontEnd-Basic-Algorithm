Array.prototype.mymap = function (callback, othis) {
  let arr = this;
  for (let i in arr) {
    arr[i] = callback(arr[i], i, arr);
  }
  return arr;
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