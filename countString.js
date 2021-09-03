function countLetters(str){
let arr = str.split('');
let result = [];
count = 1;
for(let i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
        count++;
    } else {
        let value = `${count}${arr[i]}`
        result = [...result,value];
        count =1;
    }
}
return result.join('');
}
console.log(countLetters("aabbsss"));