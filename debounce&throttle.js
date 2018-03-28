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

function throttle(method, duration) {
  let start = new Date();
  return function () {
    let now = new Date();
    let args = Array.prototype.slice.call(arguments);
    let ctx = this;
    if ((now - start) >= duration) {
      method.apply(ctx, args);
      start = now;
    }
  }
}

function clk() {
  console.log('haha')
}

let div = document.querySelector('.parent');
div.onclick = throttle(clk, 3000);


