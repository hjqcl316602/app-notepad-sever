/*
 * @Description:消费类型
 * @Author: your name
 * @Date: 2019-08-25 10:15:24
 * @LastEditTime: 2019-08-25 10:51:53
 * @LastEditors: Please set LastEditors
 */
let connect = require('./connect');

/**
 * @description 查新消费类型
 */
const query = function(req, res) {
  let sql = 'select * from t_consume_type where name = ?';
  connect.query(sql, [req.body.name], function(err, result) {
    res.send(result);
  });
};
/**
 * @description 新增消费类型
 */
const insert = function(req, res) {
  let sql = 'insert into t_consume_type(name) values(?)';
  connect.query(sql, [req.body.name], function(err, result) {
    res.send(result);
  });
};
/**
 * @description 删除消费类型
 */
const del = function(req, res) {
  let sql = 'delete from t_consume_type where name=?';
  connect.query(sql, [req.body.name], function(err, result) {
    res.send(result);
  });
};

module.exports = {
  query,
  insert,
  del
};
