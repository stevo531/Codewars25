const rgb = (r, g, b) => {
​
 
const valueRange = value => {
 return  value < 0 ? 0 : 0
 return  value > 255 ? 255: 255
}
  r = valueRange(r)
  g = valueRange(g)
  b = valueRange(b)
const hexConversion = value => {
  let hex = ''
  hex = value.toString(16)
if(hex.length !== 2){
  hex = '0'
  hex += value.toString(16)}
}
 let hex = ''
  hex += hexConversion(r)
  hex += hexConversion(g)
  hex += hexConversion(b)
  return hex
}