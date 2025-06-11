function solution(date1, date2){
    return new Date(date1.join('-')).getTime() > new Date(date2.join('-')).getTime() ? 1 : 0
}

console.log(solution(['2024', '01', '01'], ['2025', '01', '01']));