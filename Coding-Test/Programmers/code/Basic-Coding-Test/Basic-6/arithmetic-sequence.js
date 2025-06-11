// function solution(a, d, included) {
//     let count = a;
//     let arr = new Array(included.length).fill(0)
//     let zzz = arr.map((ele, idx, arr) =>{
//         return idx === 0 ? count : count+=d;
//     })
//     let kkk = zzz.filter((ele, idx,arr)=>{
//         return arr[idx] && included[idx]
//     })
    
//     return kkk.reduce((acc, cur, idx, arr)=> acc+cur, 0)
    
// }
function solution(a, d, included) {
    return included.reduce((acc, cur, idx) => {
        return cur ? acc + a + d * idx : acc
    }, 0)
}


console.log(solution(3,4,[true, false, false, true, true]))