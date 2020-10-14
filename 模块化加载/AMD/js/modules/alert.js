// 有依赖模块

define(['data'],function(data){
   let name1='alert.js'
   function fun1(){
     console.log(name1,data.fun());
   }
   return {fun1}
})