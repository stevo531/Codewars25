function domainName(url) {
url = url.replace('http://', '').replace('https://', '').replace('www.', '')
  let split = url.split('.')
  return split[0]
  }
​
​