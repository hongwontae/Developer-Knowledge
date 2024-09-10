const promise1 = Promise.resolve(2);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(2);

Promise.all([promise1, promise2, promise3]).then((result) => {
  console.log(result);
});

Promise.allSettled([promise1, promise2, promise3]).then((result) => {
    console.log(result);
  });
