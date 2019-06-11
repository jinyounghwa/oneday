function CArry(numElements){
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for ( var i = 0; i <numElements; ++i){
        this.dataStore[i] = i
    }
}

function setData() {
    for(var i =0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
    }
}
function clear(){
    for(var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}
function insert(){
    this.dataStore[this.pos++] = elementl
}

function toString(){
    var retstr = "";
    for(var i = 0; i < this.dataStore.length; ++i){
        retstr += this.dataStore[i] + " ";
        if(i > 0 && i %10 == 0){
            retstr += "\n";
        }
    }
    return retstr;
}
function swap(arr, index1, index2){
    var temp = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// var numElements = 100;
// var myNums = new CArry(numElements);
// myNums.setData();
// console.log(myNums.toString());

function bubbleSort(){
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer){
        for(var inner = 0; inner <= outer-1;++inner){
            if(this.dataStore[inner] > this.dataStore[inner-1]){
                swap(this.dataStore, inner, inner+1);
            }
        }
        console.log(this.toString());
    }
}

var numElements = 10;
var myNums = new CArry(numElements);
myNums.setData();
console.log(myNums.toString());
myNums.bubbleSort();
console.log(myNums.toString());
