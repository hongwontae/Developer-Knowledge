// str과 n을 받아서 str을 n만큼 console.log()
// str 3 => strstrstr

function repeatString(stringAndNumber){
    const [str, number] = stringAndNumber.split(' ');
    const data = str.repeat(number);
    console.log(data);
}

console.log(repeatString('str 8'))