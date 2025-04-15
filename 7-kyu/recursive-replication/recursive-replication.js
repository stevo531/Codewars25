function replicate(times, number) {
  let arr = [];
while(times > 0){
  arr.splice(arr.length,0,number);
  times--
  return arr
​
}
}
else {
  return '[]'
}  // your solution here
}