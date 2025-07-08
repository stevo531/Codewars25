function generateHashtag(str) {
  if (!str || str.trim().length === 0) return false;
​
  let words = str.trim().split(/\s+/); // Split by any whitespace
  let capitalized = words.map(word => word[0].toUpperCase() + word.slice(1));
​
  let hashtag = '#' + capitalized.join('');
​
  return hashtag.length > 140 ? false : hashtag;
}
​