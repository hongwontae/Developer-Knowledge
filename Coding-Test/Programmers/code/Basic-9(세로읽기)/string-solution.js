function solution(myString) {
    return myString.split('x').filter(ele => ele).sort();
}

console.log(solution("axbxcxdx"))