let arrLength = 0;
arrLength = parseInt(prompt('Enter array length'));

let arr = [];
console.log('Empty array', arr);
for(i = 0; i < arrLength;i++) {
    let enteredValue = prompt(`Enter ${i+1} element of array`);
    arr.push(enteredValue);
}
console.log('Filled array',arr);

arr.sort();

console.log('Sorted array', arr);

arr.splice(1,3);

console.log('Removed item from array', arr);