const mysql2 = require('mysql2');

// 数据链接不推荐使用use中间件
let db = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'chy110',
    database: 'kkb_shop'
});

module.exports = db;