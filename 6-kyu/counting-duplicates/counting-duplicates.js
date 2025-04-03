function duplicateCount(text){
const lowerTxt = text.toLowerCase();
  const charCount = {}
  for(let char of lowerTxt) {
    if(charCount[char]) {
      charCount[char]++
    }else {
      charCount[char] = 1;
    }
  }
  let count = 0;
  for(let i in charCount) {
    if(charCount[i] > 1) {
      count++
    }
  }
  return count;
   //...
}