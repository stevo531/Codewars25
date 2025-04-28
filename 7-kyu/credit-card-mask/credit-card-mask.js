// return masked string
function maskify(cc) {
let unhidden = '';
  let cc2 = cc.substr(-4);
  for(let i =0; i < cc.length - 4; i++){
    unhidden += '#';
  }
  return unhidden + cc2;
}
​