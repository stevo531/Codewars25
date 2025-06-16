 
const rgb = (r, g, b) => {
​
 
const valueRange = value => {
return Math.max(0, Math.min(255, value))
}
  r = valueRange(r)
  g = valueRange(g)
  b = valueRange(b)
const hexConversion = value => {
  let hex = ''
  hex = value.toString(16)
if(hex.length !== 2){
  hex = '0'
  hex += value.toString(16)
return hex
}
}
 let hex = ''
  hex += hexConversion(r)
  hex += hexConversion(g)
  hex += hexConversion(b)
  return hex
}