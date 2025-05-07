function order(words){
  let split = words.split(' ');
  let ordered = [];
  for(let i = 1; i<=10; i++){
    let iString = i.toString()
    for(let word= 0; word<split.length; word++){
      if(split[word].includes(iString)){
        ordered.push(split[word]);
      }
      
    }
  }
  return ordered.join(' ')
  
}