function spinWords(string){
let str = string.split(' ')
let reversed = str.map(word => {
  if(word.length >= 5){
    return word.split('').reverse().join('')
  }
  return word
})
  
return reversed.join(' ') //let str = string.split('').reverse().join(' ')
  //TODO Have fun :)
}