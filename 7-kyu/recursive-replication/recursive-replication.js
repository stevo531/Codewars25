 
function replicate(times, number) {
  let arr = [number]
if(times > 0){
  return arr.concat(replicate(times-1, number))
}
}