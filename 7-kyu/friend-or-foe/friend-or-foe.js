function friend(friends){
  let newArr = [];
 for(let i = 0; i < friends.length; i++){
   if(friends[i].length === 4){
    newArr.push(friends[i])
   }
 }
 return newArr; //your code here
}