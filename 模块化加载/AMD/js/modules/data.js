// 定义没有依赖的模块

define(function(){
  let name='data.js'
  function fun() {
    return name
  }

  return {fun}
})