// var numbers = [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];

// // numbers.sort();

// // numbers.sort(function(a,b){
// //     return a - b;
// // })

// function compare(a,b) {
//     if ( a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// }

// numbers.sort(compare);

var firends = [
    {name:"john", age:34},
    {name:'Camila', age:21},
    {name:"Jack",age:30}
];

function comparePerson(a,b) {
    if(a.age < b.age){
        return -1
    }
    if(a.age > b.age){
        return 1
    }
    return 0;
}

console.log(firends.sort(comparePerson));

//quickSort

function quickSort(arr, left, right){
    var len = arr.length, 
    pivot,
    partitionIndex;

    if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);    
    }
    return arr;
}
function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left;
    for (var i=left; i < right; i ++) {
       if (arr[i] < pivotValue) {
        swap(arr,i,partitionIndex);
        partitionIndex++;
       }
    }
    swap(arr,right,partitionIndex);
    return partitionIndex;
}
function swap(arr,i,j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

quickSort([11,8,14,3,6,2,7],0,6); 

quickSort([11,8,14,3,6,2,1, 7],0,7);

quickSort([16,11,9,7,6,5,3, 2],0,7);

        