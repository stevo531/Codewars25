 
function solution(str){
 let arr = [];
  for(let i = 0; i < str.length; i++){
    let pairChar = str[i] + (str[i] + 1)
    arr.push(pairChar)
  }
  return arr
}