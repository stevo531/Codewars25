function pigIt(str){
str=str.split(' ')
  let string=''
  for(let i=0; i<str.length;i++){
    string+=str[i].slice(1) + str[i].charAt(0) + 'ay' + ' '  
  }
  
 return string 
  //   for(let i=0; i<str.length; i++){
// str = 
//     }
//   return str
}