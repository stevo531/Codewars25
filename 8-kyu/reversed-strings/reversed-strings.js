 
function solution(str){
  let reversedString = str.split('w').reverse().join('');
  return reversedString;
}
console.log(solution('Hello world12'))