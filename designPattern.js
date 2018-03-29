// 单体模式：划分命名空间并将一批相关的属性和方法组织在一起，避免全局对象污染
let Singleton = {

  attribute: true,

  method1: function () {
  },

  method2: function () {
  }
};

// 单例模式：只有一个单独的实例
let Single = (function () {

  let instance;

  function init() {
    // private method&variety
    let p = 1;
    return {
      // public method&variety
      getP: p
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

let p = Single.getInstance();

// 工厂模式：提供创建对象的接口，根据调用者的参数，生产相应的对象，以消除对象间的耦合。
function factory() {
  let obj = new Object();
  obj.name = 'lhy';
  obj.age = '24';
  obj.job = 'fe engineer';
  obj.getName = function () {
    return this.name;
  };
  return obj;
}

// 策略模式：将定义的一组算法封装起来，使其相互之间可以替换，具有一定的独立性，不随客户端变化。
let PriceState = function () {
  let States = {
    cutoff30: function (price) {
    },
    cutoff50: function (price) {
    },
    cutoff60: function (price) {
    },
    cutoff80: function (price) {
    }
  };
  //策略算法调用接口
  return function (algorithm, price) {
    //如果算法存在，则调用算法
    return States[algorithm] && States[algorithm](price)
  }
};

// 代理模式：把对一个对象的访问, 交给另一个代理对象来操作。
let fillOut = function (date) {
  this.date = date;
};

let bigBoss = function (fillOut) {
  this.state = function (isSuccess) {
    console.log("打卡日期为：" + fillOut.date + ", 打卡状态：" + isSuccess);
  }
};

let proxy = function (fillOut) {
  this.state = function (isSuccess) {
    (new bigBoss(fillOut)).state(isSuccess); // 替bigBoss审批
  }
};

let proxyIns = new proxy(new fillOut("2016-9-11"));
proxyIns.state("打卡成功");

// 外观模式：为一组复杂的子系统接口提供一个更高级的统一接口，使得对子系统接口的访问更加容易，或对底层结构兼容性做统一封装来简化用户使用。
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

// 发布-订阅/观察者模式：定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知
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
        this.listeners[event].splice(i, 1);
        i--;
      }
    }
    return this;
  },
  emit: function (event) {
    let args = Array.prototype.slice.call(arguments, 1);
    if (this.listeners[event] !== undefined) {
      for (let i in this.listeners[event])
        this.listeners[event][i].apply(this, args);
    }
    return this;
  }
}


