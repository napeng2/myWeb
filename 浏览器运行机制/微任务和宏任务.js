
        console.log('同步任务1 start');

        setTimeout(function () {
            console.log('宏任务1：setTimeout...');
        }, 0);

        // Promise.resolve().then(function () {
        //     console.log('微任务1 Promise.then() 1')
        // }).then(function () {
        //     console.log('微任务2 Promisek.then() 2')
        // });
         new Promise((resolve,reject)=>{
          resolve()
          console.log('123');
         }).then(function () {
              console.log('微任务1 Promise.then() 1')
          }).then(function () {
              console.log('微任务2 Promise.then() 2')
          });

        setTimeout(function () {
            console.log('宏任务2：setTimeout...');
            Promise.resolve().then(function () {
                console.log('宏任务2：setTimeout => 微任务 Promise.then()')
            });
        }, 0);

        setTimeout(function () {
            console.log('宏任务3：setTimeout...');
        }, 0);

        Promise.resolve().then(function () {
            console.log('微任务3 Promise.then() 1')
        }).then(function () {
            console.log('微任务3 Promise.then() 2')
        })
        console.log('同步任务2 end');
