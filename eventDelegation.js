function eventDelegation() {
  let ul = document.querySelector('ul');
  ul.addEventListener('click', function (evt) {
    let event = evt || window.event;
    let target = event.target || event.srcElement;
    if (target.nodeName.toLowerCase() === 'li') {
      console.log(target.innerText)
    }
  }, false)
}