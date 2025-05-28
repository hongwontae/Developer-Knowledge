function solution(n, k) {
  let arr = [];
  for (let i = k; n > i; i += k) {
    arr.push(i);
  }
  return arr;
}
console.log(solution(10, 3));
console.log("koala3121".slice(-2))

function solution2(arr, intervals) {
    let arrs = [];
     intervals.forEach(([start, end], idx, ar)=>{
        return arrs.push(...arr.slice(start,end+1))
    })
    return arrs;
}
console.log(solution2([1, 2, 3, 4, 5], [[1, 3], [0, 4]]))