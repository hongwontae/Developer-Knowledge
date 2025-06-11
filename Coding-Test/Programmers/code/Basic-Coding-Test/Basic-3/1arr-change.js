// 나의 풀이
// function solution(arr, queries) {

//   let existingArr = arr;
//   queries.forEach((ele) => {
//     let a = existingArr[ele[0]];
//     let b = existingArr[ele[1]];

//     existingArr[ele[0]] = b;
//     existingArr[ele[1]] = a;
//   });
//   return existingArr;
// }


// 다른 사람 풀이
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        // 첫 번쨰 인자는 ele이며 배열입니다.
        // 구조 분해 할당으로 a,b에 접근할 수 있습니다.
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}


console.log(solution([0, 1, 2, 3, 4], [[0, 3],[1, 2],[1, 4]]));
