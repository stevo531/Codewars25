 
const rgb = (r, g, b) => {
  r = valueRange(r)
  g = valueRange(g)
  b = valueRange(b)
  let hex = ''
  hex += hexConversion(r)
  hex += hexConversion(g)
  hex += hexConversion(b)
  return hex
const valueRange = value => {
  value < 0 ? 0 : 0
  value > 255 ? 255: 255
}
const hexConversion = value => {
  let hex = ''
  hex = value.toString(16)
  hex.length !== 2 ? hex = '0'
  hex += value.toString(16)
}
​
}