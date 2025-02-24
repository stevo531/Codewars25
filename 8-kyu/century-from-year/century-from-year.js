function century(year) {
 if(year % 100 === 0){
   return year/100;
 } // Finish this :)
  return Math.ceil(year/100);
}