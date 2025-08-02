function pigIt(str){
str=str.split(' ')
  let string=''
  for(let i=0; i<str.length;i++){
   str[i].length === 1 
   ? string+=`$ {str[i]}`
   : string+=str[i].slice(1) + str[i].charAt(0) + 'ay' + ' '  
    const regex = /[.,!?]/g
    if(str[i].includes(regex)) str+=str[i]
    }
  return string 
​
}
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))