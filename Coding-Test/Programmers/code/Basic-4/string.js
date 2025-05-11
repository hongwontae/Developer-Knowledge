function solution(myString, pat) {
  let result = '';

  for (let i = 1; i <= myString.length; i++) {
    const substr = myString.slice(0, i);
    if (substr.endsWith(pat)) {
      result = substr;
    }
  }

  return result;
}

console.log(solution('AAAAaaaa', 'a'));