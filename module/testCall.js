var fullname ='zhouxy';
var obj = {
    fullname:'gaoyang',
    prop:{
        fullname:'xiaoran',
        getFullname:function(){
            return this.fullname;
        }
    }
}
console.log(obj.prop.getFullname());//xiaoran

var test = obj.prop.getFullname;
console.log(test());//zhouxy

console.log(obj.prop.getFullname.call(obj))//gaoyang