const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: '',
    password: '',
    database: 'test',
    multipleStatements: true
});
 
module.exports = pool;
