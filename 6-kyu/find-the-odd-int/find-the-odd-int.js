function findOdd(A) {
  //happy coding!
  return A.reduce((acc, num) => acc ^ num, 0);
}