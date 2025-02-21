function sumStrings(a,b) { 
​
 /* let NumA = Number(a);
  let NumB = Number(b);
  let sum = NumA + NumB;
  return sum.toString() */
  
  let numA = BigInt(a)
  let numB = BigInt(b)
  return (numA + numB).toString()
}
  