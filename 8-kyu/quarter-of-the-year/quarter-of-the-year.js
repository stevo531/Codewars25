 
const quarterOf = (month) => {
 if(month <= 3 ){
   return "first quarter"
 }
  else if(month >= 4 && month <=6){
    return 'second quarter'
    }
  else if(month >=7 && month <=9){
    return 'third quarter'}// Your code here
  return 'fourth quarter'
}