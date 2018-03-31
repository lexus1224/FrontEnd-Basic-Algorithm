let cookieUtil = {
  get: function (name) {
    let cName = encodeURIComponent(name) + '=';
    let startPos = document.cookie.indexOf(cName);
    if (startPos > -1) {
      let endPos = document.cookie.indexOf(';', startPos);
      let value;
      if (endPos > -1)
        value = decodeURIComponent(document.cookie.substring(startPos + cName.length, endPos));
      return {
        name,
        value
      }
    }
  },
  set: function (name, value) {

  }
};