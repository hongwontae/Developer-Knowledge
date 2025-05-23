function solution(my_string) {
  const words = my_string.split(' ');
  console.log(words)
  return words.filter(word => word !== '');
}
