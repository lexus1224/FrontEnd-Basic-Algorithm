;(function (window, undefined) {

  let EventEmitter = function () {
    this.events = {};
  };

  EventEmitter.prototype.getEvents = function () {
    return this.events || (this.events = {});
  };

  EventEmitter.prototype.getListeners = function (evt) {
    let events = this.getEvents();
    return events[evt] || (events[evt] = []);
  };

  EventEmitter.prototype.on = function (evt, listener, time) {
    time = typeof(time) === 'number' ? time : -1;
    time = time >= -1 ? time : -1;
    let listeners = this.getListeners(evt);
    let listenerWrapper = {
      listener: listener,
      time: time,
    };
    listeners.push(listenerWrapper);
    return this;
  };

  EventEmitter.prototype.off = function (evt) {
    let events = this.getEvents();
    events[evt] = [];
  };

  EventEmitter.prototype.once = function (evt, listener) {
    return this.addListener(evt, listener, 0);
  };

  EventEmitter.prototype.trigger = function (evt, args) {
    let listeners = this.getListeners(evt);
    for (let i = 0; i < listeners.length; i++) {
      let listener = listeners[i];
      if (listener.time !== -1) {
        listener.time--;
      }
      if (listener.time === 0) {
        this.removeListener(evt, listener.listener);//可以同步或异步执行
      }
      listener.listener.apply(this, args || []);
    }
  };

  window.EventEmitter = EventEmitter;
})(window);
    