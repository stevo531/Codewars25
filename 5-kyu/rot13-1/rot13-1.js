function rot13(message) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let cipher = '';
​
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let lower = char.toLowerCase();
    let index = alpha.indexOf(lower);
​
    if (index === -1) 
      cipher += char;
   else {
      let newIndex = (index + 13) % 26;
      let newChar = alpha[newIndex];
      cipher += (char === char.toUpperCase()) 
        ? newChar.toUpperCase() 
        : newChar;
    }
  }
​
  return cipher;
}
​