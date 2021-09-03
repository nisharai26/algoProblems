function countWords(str){
 const counts = {};  
    for(let i =0;i<str.length;i++){
        let ch = str[i]
       counts[ch] =(counts[ch] || 0) +1;
    }
    return counts;
    }
    console.log(countWords("aabbsss"));