 
function reverseWords(str) {
 let stringSplit = str.split(' ')
 let stringSplit = stringSplit.map(x => x.split('').reverse().join(''))
 return stringSplit.join(' ')
}