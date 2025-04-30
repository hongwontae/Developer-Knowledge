function solution(order) {
    var answer = 0;
    // 아메리카노는 4500
    // 카페라테는 5000
    // 메뉴만 적으면 차가운것
    // 아무거나는 차가운 아메리카노
    for(let i = order.length-1; i>-1; i--){
        console.log(order[i].includes('americano'))
    }
    return answer;
}

solution(["americanoice", "americano", "iceamericano"])