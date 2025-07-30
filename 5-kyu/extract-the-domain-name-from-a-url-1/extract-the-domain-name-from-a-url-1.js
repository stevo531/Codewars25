function domainName(url) {
  let pushed = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === '/' && url[i + 1] === '/') {
      let start = i + 2;
      if (url[start] === 'w' && url[start + 1] === 'w' && url[start + 2] === 'w' && url[start + 3] === '.') {
        start += 4;
      }
      for (let j = start; j < url.length; j++) {
        if (url[j] === '.') break;
        pushed += url[j];
      }
      break; 
    }
  }
  return pushed;
}
​
​