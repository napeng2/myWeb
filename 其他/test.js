let obj={
  name:'napeng',
  age:23
}
let arr=[1,2,3]

function deepClone(a){
  let newObj=a instanceof Array?[]:{}
  for(let item in a)
  {
    newObj[item]=typeof item===Object?deepClone(item):a[item]
  }
  return newObj
}
let newarr=deepClone(arr)
newarr[0]=0
console.log(arr);
console.log(newarr);