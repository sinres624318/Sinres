const goBack = ($router) => {
  $router.back();
};

const saveCookie = (key,value, day, path, domain) => {
  let date = new Date();
  date.setDate(date.getDate() + day);
  let str = document.cookie = key + '=' + escape(value) + ';expires' + date.toGMTString();
  if (path != undefined) {
    str += ';path' + path;
  }
  if (domain != undefined) {
    str += 'domain' + domain;
  }
  document.cookie = str;
}

const getCookie = (key) => {
  let str = unescape(document.cookie);
  let cookieArr = str.split('; ');
  for (let i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i].indexOf(key + '=') == 0) {
      return cookieArr[i].substring(key.length + 1);
    }
  }
  return null;
};
const TELregs = /(13|15|18|17|16|14|19)\d{9}/;

const verifyTEL = (TEL)=>{
  return TELregs.test(TEL);
};

module.exports = {
  goBack,
  saveCookie,
  getCookie,
  verifyTEL,
};
