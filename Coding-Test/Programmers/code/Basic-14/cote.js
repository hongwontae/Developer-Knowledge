function solution(n, k) {
  let arr = [];
  for (let i = k; n > i; i += k) {
    arr.push(i);
  }
  return arr;
}
console.log(solution(10, 3));
console.log("koala3121".slice(-2))