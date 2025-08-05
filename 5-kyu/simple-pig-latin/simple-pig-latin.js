function pigIt(str){
str=str.split(' ')
  let marks = ['.','!','?',',']
 let final = str.map(word =>
 marks.includes(word)
  ? word
  : word.slice(1) + word[0] + 'ay')
 return final.join(' ')
}
​