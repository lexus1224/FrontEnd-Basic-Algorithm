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