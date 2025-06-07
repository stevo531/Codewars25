function solution(str){
  let reversedString = str.split('').reverse().join(' ');
  return reversedString;
}
console.log(solution('Hello world12'))