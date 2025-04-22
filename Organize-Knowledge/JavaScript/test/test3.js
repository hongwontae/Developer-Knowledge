function reverseTrue(dat){
    let allo = "";
    
    // dat.length = 3
    // 0 <= 3, 0<=2, 0<=1, 0<=0
    // 2일 떄 동작하고, 1일 떄 동작하고 0일 떄까지만 동작해야 한다. 그러므로 0미만 실행 안되야 한다.
    for(let i = dat.length-1; 0<=i; i--){
        console.log(dat[i])
        allo += dat[i]
    }
    
    return allo === dat

}

console.log(reverseTrue('ABA'))