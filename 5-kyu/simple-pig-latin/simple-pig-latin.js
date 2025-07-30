function pigIt(str){
  let string = 
 for(let i=0; i<str.length; i++){
   string+=str[i]
   if(str[i] === ' '){
     continue
     string= string.split('').reverse(string.charAt(0).join(''))
   }
 
  return string
}