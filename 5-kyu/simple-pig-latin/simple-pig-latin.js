function pigIt(str){
str=str.split(' ')
  let string=''
  for(let i=0; i<str.length;i++){
    if(str[i].length === 1) string+=`$ {str[i]}`
    string+=str[i].slice(1) + str[i].charAt(0) + 'ay' + ' '  
  }
  return string 
​
}
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))