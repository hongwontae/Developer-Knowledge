// n은 정수
// slicer는 정수 배열, slicer의 담긴 정수를 차례대로 a,b,c 라고 한다.
// num_list도 정수 배열
// n에 따라 다르게 적용
function solution(n, slicer, num_list) {
  let a = slicer[0];
  let b = slicer[1];
  let c = slicer[2];

  if (n === 1) {
    return num_list.slice(0, b + 1);
  } else if (n === 2) {
    return num_list.slice(a);
  } else if (n === 3) {
    return num_list.slice(a, b + 1);
  } else if (n === 4) {
    const data = num_list.slice(a, b + 1);
    return data.filter((index) => {
      return index % c === 0
    });
  }
}

console.log(solution(4, [1, 5, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
