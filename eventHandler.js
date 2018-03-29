function eventHandler(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler);
  }
  else if (element.attachEvent) {
    element.attachEvent('on' + type, handler)
  }
  else {
    element['on' + type] = handler;
  }
}

function cb(ev) {
  console.log(ev.target.nodeName);
}

let ele = document.querySelector('.parent');
eventHandler(ele, 'click', cb);