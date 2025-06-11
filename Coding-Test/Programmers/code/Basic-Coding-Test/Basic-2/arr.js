function arrrr(arr){
    const firstTwo = arr.indexOf(2);
    const lastTwo = arr.lastIndexOf(2);
    // firstTwo와 lastTwo의 indexOf는 시작점도 다르지만 인덱스 개념도 다릅니다.
    // lastIndexOf는 첫 번쨰는 1로 생각하고 indexOf는 0으로 판단합니다.
    const twotwo = firstTwo + lastTwo;
    if(twotwo === -2){
        return [-1]
    } else {
        return arr.slice(firstTwo, lastTwo+1)
    }
}

console.log(arrrr([1,3,4,5,2,3,4,5,6,2,2]))


// s는 배열 2 요소 첫 번쨰 인덱스, e는 