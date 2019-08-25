/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 18:03:41
 * @LastEditTime: 2019-08-25 10:50:56
 * @LastEditors: Please set LastEditors
 */
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

let consumeType = require('./rest/consume-type');
app.post('/consume-type/query', consumeType.query);
app.post('/consume-type/insert', consumeType.insert);
app.post('/consume-type/del', consumeType.del);

var server = app.listen(8888, function() {
  console.log('应用实例，访问地址为 http://127.0.0.1:8888 ');
});
