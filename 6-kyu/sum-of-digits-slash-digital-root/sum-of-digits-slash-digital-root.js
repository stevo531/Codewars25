function digitalRoot(n) {
  while(n >= 10){
    let N = n.toString()
  let summedup = 0;
  for(let i=0; i<N.length; i++){
     summedup +=  Number(N[i])
  }
    n = summedup;
     }
  return n
}
​