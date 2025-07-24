function solution(list) {
  let result = [];
  let i = 0;
​
  while (i < list.length) {
    let start = i;
    while (list[i + 1] === list[i] + 1) {
      i++;
    }
​
    let end = i;
​
    if (end - start >= 2) {
      result.push(`${list[start]}-${list[end]}`);
    } else {
      for (let j = start; j <= end; j++) {
        result.push(`${list[j]}`);
      }
    }
​
    i++;
  }
​
  return result.join(',');
}