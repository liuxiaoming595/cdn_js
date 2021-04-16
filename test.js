var crypto = require('crypto');

const unordered = {
  mchId: '20000026',
  appId: 'db5992ff20af463e95e540aec2eb49c7',
  mchOrderNo: '20210334533',
  currency: 'cny',
  amount: 20000,
  subject: '测试商品',
  body: '测试商品2',
  extra: '{"openId":"o2RvowBf7sOVJf8kJksUEMceaDqo"}',
  productId: 8028,
  notifyUrl: 'http://shop.xxpay.org/notify.htm'
}
const ordered = Object.keys(unordered).sort().reduce(
  (obj, key) => { 
    obj[key] = unordered[key]; 
    return obj;
  }, 
  {}
);
let = unSignString = '';
const key = 'L3B1J5HLG6BK3VA9JSVPAVKVD01ZYDIXKQOWQRTJGGBXVXMFB4BTCLR8QRNDHN6ZER4PKJSJLK1672MP72KBWVUTHSY90MS3W5ENBOX7R4ZJFXATK0K29NTVR1WIEKA0';
Object.keys(ordered).forEach((k)=> {
  unSignString += k + '=' + ordered[k] + '&';
})
unSignString += 'key=' + key;
const md5 = crypto.createHash('md5');
const md5token = md5.update(unSignString).digest('hex');
console.log(md5token.toUpperCase());

const censor = require('./helper/filter');
const filter = censor.filter('性交!');
console.log(filter);
console.log(/\/subject\/\d+/.test("https://m.douban.com/movie/subject/34804147/?from=showing"));