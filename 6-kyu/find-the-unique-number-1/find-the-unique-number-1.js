function findUniq(arr) {
 let pushed = [];
  let unique = ''
 for(let i=0; i<arr.length; i++){
   if(!pushed.includes(arr[i])){
     pushed.push(arr[i])
    // pushed.pop(0)
   }
   else unique += arr[i]
 }
    if (arr.filter(v => v === pushed[0]).length === 1) {
    return pushed[0];
  } else {
    return pushed[1];
  }
  
//   return pushed.pop(0)// do magic
}
​