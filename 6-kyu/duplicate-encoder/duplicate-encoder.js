const duplicateEncode = word => {
  let wordLower = word.toLowerCase()
   let convert = '';
  for(let string of wordLower){
  convert +=  wordLower.lastIndexOf(string) === wordLower.indexOf(string) ? '(' : ')'
  }
  return convert
}
​