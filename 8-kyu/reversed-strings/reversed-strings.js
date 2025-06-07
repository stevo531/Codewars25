 
function solution(str){
  let reversedString = str.split('e').reverse().join('');
  return reversedString;
}
console.log(solution('Hello world12'))