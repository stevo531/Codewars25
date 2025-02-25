function dnaStrand(dna){
  let finalDNA = ''
 for(let i = 0; i < dna.length; i++){
   if(dna[i] === 'A'){
     finalDNA += 'T'
      
   } else if(dna[i] === 'T'){
     finalDNA += 'A'
   } else if(dna[i] === 'C'){
     finalDNA += 'G'
   } else if(dna[i] === 'G'){
     finalDNA += 'C'
   }}
   return finalDNA;
 }