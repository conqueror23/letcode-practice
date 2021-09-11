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


const ifPalindemic = (input) => {
    const cMap = getCMap(input)
    const longestPal="";
    cMap.forEach((result,key)=>{
        if(result.length>1){
           let left = 0;
           let right = result.length-1
            while(left < right){
                if(input[left]==input[right]){
                    left=+1;
                    right-=1;

                }else{

                }



            }

        }
    })

    return cMap
};

const longestPal = (getLongestPal = (input) => {
  const tempLongest = {};
  const isPalind = ifPalindemic(input);
  return isPalind;
});

console.log(longestPal(testA));
