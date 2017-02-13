var mysql = require('mysql');
var db    = require('../conf/db/db.js');

var connection  = mysql.createConnection(db.config);
console.log(db.config);
/*链接数据库*/
connection.connect()
connection.query('select * from person where id = 2',function(err,rows,fields){
    if(err) throw err;
        // console.log('The solution is:',rows);
        console.log(rows[0]);
        console.log(rows[0].name);
        console.log(rows[0].password);
        console.log(rows[0].sex);
        console.log(rows[0].tel);
        console.log(rows[0].email);
});
connection.end();
