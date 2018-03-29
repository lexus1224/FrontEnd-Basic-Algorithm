function eventHandler(element, type, handler, capture) {
  if (element.addEventListener) {
    element.addEventListener(type, function (para) {
      handler.call(element, para)
    }, capture);
  }
  else if (element.attachEvent) {
    element.attachEvent('on' + type, function (para) {
      handler.call(element, para)
    })
  }
  else {
    element['on' + type] = function (para) {
      handler.call(element, para)
    };
  }
}

function cb(ev) {
  console.log(ev.target.nodeName);
}

let ele = document.querySelector('.parent');
eventHandler(ele, 'click', cb);