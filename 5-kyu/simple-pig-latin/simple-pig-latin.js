function pigIt(str){
str=str.split(' ')
  let string=''
  let marks = ['.','!','?',',']
  for(let i=0; i<str.length;i++){
   str[i].length === 1 
   ? string+=`${str[i]}`
   : string+=str[i].slice(1) + str[i].charAt(0) + 'ay' + ' '  
  if(marks.includes(str[i])) string+=str[i]
    if(i !== str.length-1) str+= ' '
    }
  return string
​
}
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))