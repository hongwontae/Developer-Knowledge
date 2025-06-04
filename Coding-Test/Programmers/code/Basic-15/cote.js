function solution(a,b,c){
    [...a].splice(c, b.length, ...b)
    return a
}

console.log(solution("He11oWor1d", "lloWorl", 2))

function test(str){
    return str.replaceAll('a', 'A')
}

console.log(test('aaasssko'))
console.log('a' === 'A'.toLowerCase())