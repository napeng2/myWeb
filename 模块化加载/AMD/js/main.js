(function(){
    requirejs.config({
      paths:{
        data:'./modules/data',
        alert:'./modules/alert'
      }
    })

   require(['alert'],function(alert){
    alert.fun1();
   })
   console.log('123');
})()