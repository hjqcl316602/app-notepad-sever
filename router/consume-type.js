/*
 * @Description:消费类型
 * @Author: your name
 * @Date: 2019-08-25 10:15:24
 * @LastEditTime: 2019-08-28 23:21:01
 * @LastEditors: Please set LastEditors
 */
let express = require('express');
let connect = require('./connect');
let router = express.Router();
/**
 * @description 查新消费类型
 */
router.post('/', function(req, res) {
  let sql = 'select * from t_consume_type where name like ?';
  connect.query(sql, [req.body.name], function(err, result) {
    res.send(result);
    res.render('index', { title: 'login' });
  });
});

router.get('/login', function(req, res) {
  //console.log(req.session);
  let session = req.session;
  session.username = 'hjq';
  //req.session.username = 'huang';
  res.send(session);
});
router.get('/query', function(req, res) {
  let session = req.session;
  res.send(session);
});
// /**
//  * @description 新增消费类型
//  */
// const insert = function(req, res) {
//   let sql = 'insert into t_consume_type(name) values(?)';
//   connect.query(sql, [req.body.name], function(err, result) {
//     res.send(result);
//   });
// };
// /**
//  * @description 删除消费类型
//  */
// const del = function(req, res) {
//   let sql = 'delete from t_consume_type where name=?';
//   connect.query(sql, [req.body.name], function(err, result) {
//     res.send(result);
//   });
// };

module.exports = router;
