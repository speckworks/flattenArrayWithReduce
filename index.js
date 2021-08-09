
arr1 = [ [1,2],['1','2'],[[1,0],'p']];
arr2 = [1,2,3];
arr3 = [[0, 1], [2, 3], [4, 5]]


const flattenArray = (arr)=>{
let flattened = arr.reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
)
console.log(flattened);
}


flattenArray(arr1);
flattenArray(arr3);