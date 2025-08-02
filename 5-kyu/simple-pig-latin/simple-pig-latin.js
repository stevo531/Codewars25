function pigIt(str){
str=str.split(' ')
  let string=''
  for(let i=0; i<str.length;i++){
   str[i].length === 1 
   ? string+=`$ {str[i]}`
   : string+=str[i].slice(1) + str[i].charAt(0) + 'ay' + ' '  
    const regex = /[.,!?]/g
    const match = string.match(regex)
    if(str[i] === match) string+=str[i]
    //if(regex.includes(str[i])) str+=str[i]
    }
  return string.trim()
​
}
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))