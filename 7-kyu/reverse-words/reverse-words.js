function reverseWords(str) {
 let str = str.split(' ')
 let str = str.map(x => x.split('').reverse().join(''))
 return str.join(' ')
}