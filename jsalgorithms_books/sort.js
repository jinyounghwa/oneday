function ArrayList() {
    var array = [];

    this.insert = function(item){
        array.push(item);
    };
    this.toString = function(){
        return array.join();
    };
    var swap = function(index1, index2){
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };
    this.bubbleSort = function(){
        var length = array.length;

        for(var i=0; i<length; i++){
            for(var j=0; j<length-i;j++) {
                if(array[j] > array[j+1]){
                    swap(j,j+1);
                }
            }
        }
    }
    this.selectionSort = function()  {
        var length = array.length,
        indexMin;

        for(var i=0; i<length; i++){
            indexMin =i;
            for (var j=i; j<length-1;j++){
                if(array[indexMin] > array[j]){
                    indexMin =j;
                }
            }
            if(i!== indexMin){
                swap(i, indexMin);
            }
        }

    }
    this.insertionSort = function() {
        var length = array.length,j,temp;

        for(var i=1; i < length; i++){
            j=i;
            temp = array[i];
            while(j>0 && array[j-1] > temp){
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }
    }
}

function createNonSortedArray(size){
    var array = new ArrayList();
    for(var i=size; i>0; i--){
        array.insert(i);
    }
    return array;
}
// var array = createNonSortedArray(5);
// console.log(array.toString());
// array.bubbleSort();
// console.log(array.toString());

var array = createNonSortedArray(5);
console.log(array.toString());
array.selectionSort();
console.log(array.toString());