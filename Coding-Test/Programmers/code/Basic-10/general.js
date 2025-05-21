function solution(num_list) {
    const a = num_list.reduce((acc, cur, idx, arr)=>{
        return acc*cur
    }, 1)
    const b = num_list.reduce((acc, cur, idx, arr)=>{
        return acc+cur
    }, 0)

    if(a > b*b){
        return 0
    } else {
        return 1
    }
}

console.log(solution([5, 7, 8, 3]))


function solution2(str, n){
    return str.repeat(n)
}

console.log(solution2('Hello-world ', 9))


function solution3(n){
    console.log(Math.abs(n)%2 === 0)
}

solution3(-10)