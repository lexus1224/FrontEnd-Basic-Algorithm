function sum() {
  let args = [].slice.call(arguments);
  let fn = function () {
    let newargs  = args.concat([].slice.call(arguments));
    return sum(...newargs);
  };
  fn.toString = function () {
    return args.reduce((a,b)=>{return a*b},1);
  }
  return fn;
}

console.log(sum(1)(2,3)(4,5,6));


function loadXML() {
  let xhr;
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  }
  else{
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhr.onreadystatechange = function () {
    if(xhr.status==200&&xhr.readyState==4){
      let inner = xhr.responseText;
    }
  }
  xhr.open('GET','www.baidu.com',true);
  xhr.send();
}