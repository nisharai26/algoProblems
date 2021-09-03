function substrCount(n, s) {
    let count = 0;
    for (let start = 0; start < n; start++) {
        for (let end = start + 1; end <= n; end++) {
            let specialStr = s.slice(start, end)
            if (isSpecial(specialStr)) count++;   
       }    
    }
    return count;
   }
   function isSpecial(element) {
        if (element.length === 1 ) return true
        let set = new Set(element.split(''))
        // string is repetition of one char
        if (set.size === 1) return true
        if (element.length % 2 === 0) return false
        let index = Math.floor(element.length/2)
        let str = element.slice(0, index) + element.slice(index + 1);
        let set2 = new Set(str.split(''))
        return set2.size === 1;    
    }