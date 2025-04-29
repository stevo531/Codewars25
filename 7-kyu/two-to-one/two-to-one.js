function longest(s1, s2) {
let combined = [...s1, ...s2];
  let unique= new Set(combined)
  let final = unique.sort((a,b) => a-b)
  return final
  // your code
}