/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 18:03:41
 * @LastEditTime: 2019-08-28 23:25:07
 * @LastEditors: Please set LastEditors
 */
let express = require('express');

let app = express();

/**
 * @description:  请求参数处理
 */
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * @description:  跨域处理
 */

let cors = require('cors');
app.use(
  cors({
    origin: '*' //'http://192.168.0.100:8080', // 必须制定域名，当前端withCredentials设置为true的时候
    //credentials: true
  })
);

/**
 * @description:  保存 session
 */

var session = require('express-session');
var NedbStore = require('nedb-session-store')(session);
const sessionMiddleware = session({
  secret: 'fas fas',
  resave: true,
  saveUninitialized: false,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 10 * 1000
  },
  store: new NedbStore({
    filename: 'path_to_nedb_persistence_file.db'
  })
});
app.use(sessionMiddleware);
/**
 * @description:  请求地址
 */

let consumeType = require('./router/consume-type');
app.use('/consume-type', consumeType);

/**
 * @description:  开启服务
 */

var server = app.listen(8888, function() {
  console.log('应用实例，访问地址为 http://127.0.0.1:8888 ');
});
