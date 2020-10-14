// function deepClone(obj) {
//   var newObj = obj instanceof Array ? [] : {};
//   for (var item in obj) {
//     var temple = typeof obj[item] == 'object' ? deepClone(obj[item]) : obj[item];
//     newObj[item] = temple;
//   }
//   return newObj;
// }
// let obj=[1,2,3]
// let arr=deepClone(obj)
// arr[0]=0
// console.log(obj);
// console.log(arr);

function deepClone(obj){
  let newObj=obj instanceof Array ?[]:{}
  for(let item in obj){
    let temple=typeof obj[item]==='object'?deepClone(obj[item]):obj[item]
    newObj[item]=temple
  }
  return newObj
}