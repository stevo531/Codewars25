function alphabetPosition(text) {
  let splitText = text.replaceAll(' ', '').split('')
  let alpha = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
 for(let i =1; i<alpha.length; i++){
   let index = indexOf(alpha[i])
   for(let i =1; i<splitText.length; i++){
     let index2 = indexOf(splitText[i])
   }
   return splitText.map(index2 => index).join('')
 }
}