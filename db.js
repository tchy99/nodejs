require('dotenv').config()
const mysql = require('mysql');

exports.pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.host,
  user            : process.env.user,
  password        : process.env.pswd,
  database        : process.env.db
});
