function findEvenIndex(arr) {
  //Code goes here!
for(let middleIndex=0; middleIndex<arr.length; middleIndex++){
  let sum1 = 0
  let sum2 = 0
  for(let i= 0; i<middleIndex; i++){
    sum1+=arr[i]
  }
  for(let i=middleIndex+1; i<arr.length; i++){
    sum2+=arr[i]
  }
    if(sum1===sum2) return middleIndex
​
}
  return -1
}