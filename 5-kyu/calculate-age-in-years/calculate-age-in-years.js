/**
 * Return the difference between a birthdate and an optional "now" date, in years
 * 
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}
 */
function getAge(birthDate = new Date(year,month,day), nowDate = new Date()) {
let now = new Date(nowDate);
  let  birth = new Date(birthDate);
  let birthYear = birthDate.getFullYear();
  let nowYear = nowDate.getFullYear();
  let age = nowYear - birthYear;
  if(now.getMonth() < birth.getMonth() ||now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate()){
    age--;
  }
  return age ;
}