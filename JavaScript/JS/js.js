const data = new Promise((resolve, reject)=>{
    return resolve(12)
});

const tt = data.then(result => {
    console.log(result, 'dd')
    return result
})

console.log(99);