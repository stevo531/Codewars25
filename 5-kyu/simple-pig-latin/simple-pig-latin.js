 
function pigIt(str){
str=str.split(' ')
  let marks = ['.','!','?',',']
 let final = str.map(word =>
  return marks.includes(word)
  ? word
  : word.slice(1) + word[0] + 'ay')
}
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))