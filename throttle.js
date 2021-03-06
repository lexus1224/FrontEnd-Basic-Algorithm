function debounce(method, delay) {
  let timer = null;
  return function () {
    let ctx = this;
    let args = Array.prototype.slice.call(arguments);
    clearTimeout(timer);
    timer = setTimeout(() => {
      method.apply(ctx, args)
    }, delay)
  }
}

function throttle(method, delay, duration) {
  let start = new Date(),
      timer = null;
  return function () {
    let now = new Date();
    let args = Array.prototype.slice.call(arguments);
    let ctx = this;
    if(timer){
      clearTimeout(timer);
      timer=null;
    }
    if ((now - start) >= duration) {
      method.apply(ctx, args);
      start = now;
    }
    else {
      timer = setTimeout(() => {
        method.apply(ctx, args);
        start = now;
      }, delay)
    }
  }
}

function clk() {
  console.log('haha')
}

let div = document.querySelector('.parent');
div.onclick = throttle(clk, 2000, 5000);