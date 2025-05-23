// function aaa(list) {
//   return list.sort((a,b)=>b-a);
// }

// console.log(aaa([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));

function solution(str_list, ex) {
    let case1 = str_list.filter((ele)=>{
        return !ele.includes(ex);
    });
    return case1.join('')
}

console.log(solution(["abc", "def", "ghi"], "ef"))


function solution2(my_string, alp) {
    let ss = my_string.indexOf(alp);
    my_string[ss] = my_string[ss].toUpperCase();
    return my_string;
}

console.log(solution2("programmers", 'p'))

function solution3(str){
  let [a,b,c] = str.split(' ')
  console.log(a)
  console.log(b)
  console.log(c)
  
}
solution3("43 + 12")