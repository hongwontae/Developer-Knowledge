function solution(my_string, indices) {
    let kkk = [...my_string]
    let zzz =indices.map((ele, idx, arr)=>{
        return kkk[arr[idx]] = 0;
    })

    const koko = kkk.filter((ele)=>{
        return ele === 0 ? false : true
    })

    return koko.join('') 
}

solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])
// function solution(m, a) {
//     var answer = '';

//     for(let i = 0; i<m.length; i++){
//         // m은 string이다. 스트링 길이만큼 for
//         if(!a.includes(i)){
//             answer += m[i]
//         }
//     }

//     return answer;
// }