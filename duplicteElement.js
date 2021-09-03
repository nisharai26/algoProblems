
 function checkIfDuplicateExists(w){
    return new Set(w).size !== w.length 
}

console.log(
    checkIfDuplicateExists(["a", "b", "c", "a"])
// true
);

console.log(
    checkIfDuplicateExists(["a", "b", "c"]))
//false