function sumRecursive(array){
    if(array.length == 1) return array[0];
    return array[0] + sumRecursive(array.slice(1));
};

console.log(sumRecursive([4, 8]));