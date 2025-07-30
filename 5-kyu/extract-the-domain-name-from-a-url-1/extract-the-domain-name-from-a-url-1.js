function domainName(url) {
let splitted = url.split('.')
let name = ''
for(let i=0; i<splitted.length; i++){
  if(splitted[i] === '.'){
    name+= splitted[i-1]
  }
}
  return name
}
​
​