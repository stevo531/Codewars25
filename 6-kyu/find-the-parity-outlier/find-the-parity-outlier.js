function findOutlier(integers){
 let passEven = []
 let passOdd = []
  //your code here
  for(let i=0; i<integers.length; i++){
    let num = integers[i];
    if(num % 2 === 0){
      passEven.push(num);
    }
    else {
      passOdd.push(num);
    }
  }
  return passEven.length === 1 ? (...passOdd) : (...passEven)
}