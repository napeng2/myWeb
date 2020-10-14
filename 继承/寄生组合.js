function Fun(name){
  this.name=name
  this.arr=[1,2,3]
}
Fun.prototype.say=function(){
  console.log('hello');
}
function Show(age){
  this.age='11'
  Fun.call(this)
}

Show.prototype=Object.create(Fun.prototype)
let p=new Show()
let p1=new Show()
p.arr[0]=0
console.log(p.arr);
console.log(p1.arr);
