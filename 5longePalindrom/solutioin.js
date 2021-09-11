const testA = "ababdcddfe1efddd";


const getCMap=(input)=>{
  const b = [...testA];
  const d = new Map();
  b.forEach((c, index) => {
    if (d.get(c)) {
      if (d.get(c).length > 1) {
        d.set(c, [...d.get(c), index]);
      } else {
          d.set(c,[d.get(c),index])
      }
    }else{
        d.set(c,index)
    }
  });

  return d


}


const ifPalindemic = (input,left,right) => {
    let temp ='';
    let pendingLeft =left;
    let pendingright =right
    while(pendingLeft<pendingright){
        if(input[pendingLeft] == input[pendingright]){
            pendingLeft=pendingLeft+1;
            pendingright= pendingright-1;
        }else{
            return temp;
        }
    }
    temp = input.slice(left,right+1)
    return temp

};

console.log(ifPalindemic('aaca',0,3))


const longestPal = (getLongestPal = (input) => {
  const tempLongest = {};
  const cMap = getCMap(input)
  const isPalind = ifPalindemic(input,3,5);
  return isPalind;
});

console.log(longestPal(testA));
