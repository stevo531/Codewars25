const zeros = n => {
  let nums =1
  let count = 0
  for(let i=1; i<12 ; i++){
    nums*=i
    nums=nums.toString().split('')
    for(let i=0; i<nums.length; i++){
      nums[i] === '0'
      ? count++
      : count
    }
  }
  return count
}