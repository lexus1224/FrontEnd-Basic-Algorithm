function regexp(str) {
  let reg = /^http[s]?:\/\/([\w-]+.)+[\w-]+([\w&?/=%#]+)*$/i;
  let res;

    console.log(str.match(reg))

}

regexp("https://space.bilibili.com/28152409?from=search&seid=9429306781350138685#/video")