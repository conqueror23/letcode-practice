const testA= "ababdcddfe1efddd"


const ifPalindemic=(input)=>{
    const b= [...testA]
    const d = {};
    b.forEach((c,index)=>{
        if(d[c]){
            d[c] = [d[c],index]
        }else {
            d[c] = index
        }

    })
    console.log(JSON.stringify(d))
    const cMap = new Map();
    b.forEach((c,index)=>{
        cPreIndex = cMap.get(c);
        if(cPreIndex && cPreIndex.constructor.name ==='array'){
        cMap.set(c,[...cPreIndex,index])
        }else{
            cMap.set(c,index)
        }

    })
    return cMap
    leftPos = 0;
    rightPos =input.length ;
    while(leftPos<rightPos){
        if(input[leftPos]==rightPos){
            
        }else{

        }
    }
    



}

const longestPal = getLongestPal=(input)=>{
    const tempLongest = {};
    const isPalind = ifPalindemic(input) 
    return isPalind

}


console.log(longestPal(testA))
