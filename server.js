var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//1.创建实例化的express
var app = express();
//2.引入路由
var router = require('./router/router.js');
//3.设置静态文件（暂时托管）,引入中间件body-parser
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//4.设置服务端口
app.set('port',process.env.PORT||3001);
//5.将app实例传入router方法中
router(app);
//6.创建服务环境
app.listen(app.get('port'),function(){
    console.log('Express server listening on port:'+app.get('port'));
})