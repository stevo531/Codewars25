function derive(coefficient,exponent) {
  let product = coefficient * exponent;
  return `${product}x^${exponent-1}`
}