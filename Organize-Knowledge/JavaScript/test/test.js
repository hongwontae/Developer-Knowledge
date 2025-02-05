const promise1 = Promise.resolve(2);
const promise2 = Promise.resolve(2);
// const promise3 = Promise.reject(2);

// Promise.all([promise1, promise2, promise3]).then((result) => {
//   console.log(result);
// });

// Promise.allSettled([promise1, promise2, promise3]).then((result) => {
//     console.log(result);
// });


const promiseTest = new Promise((resolve, reject)=>{
  if(true){
    resolve(10);
  }
});

const test = promiseTest.then(result => {
  console.log(result);
  return 2
});

const tt = Promise.resolve(new Promise((resolve, reject)=>{resolve(1000)}));
console.log(tt)

