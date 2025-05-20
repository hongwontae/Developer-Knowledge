function solution(n){
    let cal = 0;

    if(n%2 === 0){
        console.log('???')
        for(let i=n; i>0; i-=2){
            cal += i*i
        }
    } else {
        cal='sum'
    }

    return cal;

}

console.log(solution(10))