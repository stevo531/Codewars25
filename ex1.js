function getSum(a, b)
{
    if(
 a === b ){
    return a;
  }
  else if(a>b){
    [a,b] = [b,a]
  }
  let first = 0;
  for(i = a; i <= b; i++){
    first += i;
  }

  return first;//Good luck!
}
console.log(getSum(10,2))