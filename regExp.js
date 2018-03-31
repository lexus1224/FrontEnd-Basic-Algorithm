function regexp(str) {
  let reg = /\d+/gi;
  let res;
  while (res = reg.exec(str)) {
    console.log(res)
  }
}

regexp("lihy37@mail2.sys321u.ed434u.c11n")