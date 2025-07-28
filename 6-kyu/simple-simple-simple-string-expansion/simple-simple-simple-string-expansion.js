const stringExpansion = s => {
  let result = '';
  let repeat = 1;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && s[i] !== ' ') {
      repeat = Number(s[i]);
    } else if (isNaN(s[i])) {
      result += s[i].repeat(repeat);
    }
  }
  return result;
};