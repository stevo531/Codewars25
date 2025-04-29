function findOutlier(integers){
 let passEven = ''
 let passOdd = ''
  //your code here
  for(let i=0; i<integers.length; i++){
    let num = integers[i];
    if(num % 2 === 0){
      passEven += num;
    }
    else {
      passOdd += num;
    }
  }
  return passEven.length === 1 ? passEven.length : passOdd.length
}