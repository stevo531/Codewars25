const solution = string => {
  let word = ''
  for(let char of string){
    char === char.toUpperCase() ? word+=` ${char}` : word+=char
  }
  return word
}