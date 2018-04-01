function urlUtil(url) {
  let startPos = url.indexOf('?');
  if (startPos > -1) {
    let reqStr = decodeURI(url).substring(startPos + 1);
    let reqArr = reqStr.split('&');
    let reqObj = {};
    for (let item of reqArr) {
      let eqPos = item.indexOf('=');
      let name = item.substring(0, eqPos);
      let value = item.substring(eqPos + 1);
      reqObj[name] = value;
    }
    return reqObj;
  }
  else
    return -1;
}

console.log(urlUtil('https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=url%20%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0&oq=string%2520js&rsv_pq=cfecaee100010a03&rsv_t=50991wI6w%2Fqwe6LzrMEP2AiBgFKkDL1fExTz0Pje54NNDBQ2q1n8qfGIvxk&rqlang=cn&rsv_enter=1&rsv_sug3=8&rsv_sug1=8&rsv_sug7=100&rsv_sug2=0&prefixsug=url%2520qi&rsp=1&inputT=3994&rsv_sug4=163669'));

function cookieUtil(cookie) {
  cookie = decodeURIComponent(cookie);
  let cookieArr = cookie.split(';');
  let cookieObj = {};
  for (let item of cookieArr) {
    let eqPos = item.indexOf('=');
    let name = item.substring(0, eqPos).trim();
    let value = item.substring(eqPos + 1).trim();
    cookieObj[name] = value;
  }
  return cookieObj;
}

console.log(cookieUtil("TvQM3p6-flmR70zfPXNsK5AnOG1-DBODkrkjpOTPWv-2jVtmGr2Zdyj9c-nBVdAOOBJYTnMRhWozbPFyqXJ505GbPEIZMlP6E-w8S1D3y&wd=&eqid=94d3f6f2000391d1000000065ac0d58a   ; bdshare_firstime=1499525744018; uuid_tt_dd=-7458591662445017995_20170708; Hm_lvt_28b915da008e81ea36f8f3fc784cde5f=1504599140; " +
    "Hm_lvt_2654d561ece08741c8f9acd6a592aae0=1504256071,1505956287; Hm_lvt_396dec01f3b2b10b107e64ec87331616=1504256071,1505956287; __utma=17226283.83724853.1501078762.1506830583.1506860287.6; __utmz=17226283.1501078762.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; UN=qq_20357103; BT=1510031793433; CNZZDATA1259587897=1787875143-1508311749-https%253A%252F%252Fwww.baidu.com%252F%7C1510192887; ADHOC_MEMBERSHIP_CLIENT_ID1.0=1b15e280-58a9-99ac-02c4-61bf5d3bed4c; csdn_tt_dd=v10_e8490b4bceac96cb1ba5be6726de5d0e; Hm_ct_6bcd52f51e9b3dce32bec4a3997715ac=1788*1*PC_VC; __yadk_uid=2LRaPUj9dA1ONqrzEI5dDOLAlbc5UrGe; dc_session_id=10_1522221068280.199106; dc_tos=p6ibo1; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1522586673,1522586673,1522586675,1522587026; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1522587026"));