function oddOrEven(array) {
   let sumed = array.reduce((initial, total) => initial+total ,0)
   if(sumed % 2 === 0){
     return 'even'
   }
  return "odd"
     //enter code here
}