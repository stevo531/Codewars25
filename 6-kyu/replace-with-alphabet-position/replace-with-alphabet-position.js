 
function alphabetPosition(text) {
  let splitText = text.replaceAll(' ', '').toLowerCase().split('')
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
 let mapped = splitText.map(char => {
   let indexed = alpha.indexOf(char)
   return indexed != -1 ? indexed + 1 : '';
 })
 return mapped.filter(boolean).join(' ')
 }
​