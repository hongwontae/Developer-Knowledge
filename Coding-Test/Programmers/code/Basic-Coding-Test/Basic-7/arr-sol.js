function solution(arr, flag) {
    let result = [];
    flag.forEach((ele, idx, flagArr) => {
        if(flagArr[idx]){
            for(let i =0; i < arr[idx]*2 ;i++){
                result.push(arr[idx])
            }
        } else {
            for(let i =0; i<arr[idx];i++){
                result.pop();
            }
        }
    })
    return result;
}