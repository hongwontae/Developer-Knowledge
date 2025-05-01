function solution(strArr){
    let object = {};
    for(const str of strArr){
       let length = str.length;
       // object[legnth]의 초기값은 undefined이기에 Nan
        object[length] = (object[length] || 0) +1
    }
    return Math.max(...Object.values(object))
}

solution(["a","bc","d","efg","hi"])