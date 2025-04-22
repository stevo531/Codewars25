function reverseWords(str) {
 let stringSplit = str.split(' ')
  stringSplit = stringSplit.map(x => x.split('').reverse().join(''))
 return stringSplit.join(' ')
}