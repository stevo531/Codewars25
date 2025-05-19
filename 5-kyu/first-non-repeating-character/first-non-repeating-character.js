function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let lowerChar = char.toLowerCase();
​
    if (s.toLowerCase().indexOf(lowerChar) === s.toLowerCase().lastIndexOf(lowerChar)) {
      return char; // maintain original case
    }
  }
  return '';
}