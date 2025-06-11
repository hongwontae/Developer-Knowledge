function test(s){
    let case1 = [...s].map((ele, idx, arr)=>{
        if(ele === '-'){
            return ' '
        } else if (arr[idx-1] === '-'){
            return `-${ele}`
        } else {
            return ele
        }
    }).filter(ele => ele !== ' ')

    case1.sort((a,b)=>a-b);

    console.log(case1);

    return `${case1[0]} ${case1[case1.length-1]}`
    
}

console.log(test("-1 -2 -3 -4"))

function solution(s) {
    const numbers = s.split(" ").map(Number);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return `${min} ${max}`;
}