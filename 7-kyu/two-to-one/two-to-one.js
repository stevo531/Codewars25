function longest(s1, s2) {
//let combined = [...s1, ...s2];
  let unique=[...new Set(s1+s2)]
  return unique.sort().join('')
  // your code
}