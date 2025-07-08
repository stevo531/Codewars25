// const incrementString = strng => {
//   let string = '';
//   let num = '';
//  for (let char of strng) {
//     isNaN(char) || char === ' ' ? string += char : num += char;
//   }
//   let originalLength = num.length;
//   let incremented = (parseInt(num || '0', 10) + 1).toString();
//   let paddedNum = num ? incremented.padStart(originalLength, '0') : incremented;
​
//   return string + paddedNum;
// }
​
const incrementString = (strng) => {
  const match = strng.match(/(\d+)$/);
  if (!match) return strng + '1';
​
  const number = match[0];
  const sliced = strng.slice(0, -number.length);
  const incremented = String(Number(number) + 1).padStart(number.length, '0');
​
  return `${sliced}${incremented}`;
};