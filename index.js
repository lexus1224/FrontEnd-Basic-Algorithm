function pubsub() {
  this.listeners = {};
}

pubsub.prototype = {
  on: function (event, listener) {
    if (this.listeners[event] !== undefined)
      this.listeners[event].push(listener);
    else
      this.listeners[event] = [];
    return this;
  },
  off: function (event, listener) {
    for (let i = 0; i < this.listeners[event].length; i++) {
      if (this.listeners[event][i] === listener) {
        this.listeners[event].splice(i, 1)
        i--;
      }
    }
    return this;
  },
  emit: function (event) {
    let args = [].slice.apply(arguments, 1);
    if (this.listeners[event] !== undefined) {
      for (let i in this.listeners[event])
        this.listeners[event][i].apply(this, args);
    }
    return this;
  }
}

function reverseString(str) {
  let newstr = str.replace(/\s+/g,' ');
  return newstr.split(' ').reverse().join(' ');
}


let single = (function () {
  let unique;

  function getInstance() {
    if (unique === undefined) {
      unique = new constructor();
    }
    return unique;
  }

  function constructor() {
    // 初始化代码
  }

  return {
    getInstance
  }
})();


function sum() {
  let args = [].slice.call(arguments);
  let fn = function () {
    let newargs = args.concat([].slice.call(arguments));
    return sum(...newargs);
  };
  fn.toString = function () {
    return args.reduce((a, b) => {
      return a * b
    }, 1);
  }
  return fn;
}

console.log(sum(1)(2, 3)(4, 5, 6));


function loadXML() {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  }
  else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      let inner = xhr.responseText;
    }
  }
  xhr.open('GET', 'www.baidu.com', true);
  xhr.send();
}