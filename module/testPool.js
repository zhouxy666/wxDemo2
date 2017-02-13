var mysql = require('mysql');
var db    = require('../conf/db/db.js');

var pool = mysql.createPool(db.poolConfig);
console.log(db.poolConfig);
pool.getConnection(function(err,connection){
    connection.query('select * from person',function(err,rows,fields){
        if(err) throw err;
        console.log(rows);
        connection.release();
    })
});
// pool.query('select * from person',function(err,rows,fields){
//     if(err) throw err;
//     console.log(rows);
// })