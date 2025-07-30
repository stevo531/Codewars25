function domainName(url) {
let splitted = url.split('.')
let name = []
for(let i=0; i<splitted.length; i++){
  if(splitted[i] === 'www' && splitted[i+1] === '.'){
    name.push(splitted[i+2])
  }
}
  return name
}
​
​