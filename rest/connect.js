/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-25 10:12:18
 * @LastEditTime: 2019-08-25 10:12:56
 * @LastEditors: Please set LastEditors
 */
let mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'notepad'
});

connection.connect();

module.exports = connection;
