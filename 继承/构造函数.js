function Fun(name){
  this.name=name
}
Fun.prototype.say=function(){
  console.log('hello');
}
function Show(age){
  this.age=age
  Fun.call(this,'napeng')
}
let a=new Show('23')
console.log(a.name);
console.log(a.age);
// a.say()