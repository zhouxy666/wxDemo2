module.exports = function(app){
    app.get('/wxreq',function(req,res){
        var obj = {};
        obj = {
            param1:req.query.param1,
            param2:req.query.param2
        }
        res.send(obj);
    });
    app.post('/wxreq',function(req,res){
        console.log('in post request');
        var obj = {};
        obj={
            param1:req.body.param1,
            param2:req.body.param2,
        }
        res.send(obj);
    });
    app.get('/',function(req,res){
        res.send('<h1>Welcom WxExpress</h1>');
    })
}