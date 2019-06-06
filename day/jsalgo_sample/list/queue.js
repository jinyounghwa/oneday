// function Queue(){
//     var items = [];
//     this.enqueue = function(element){
//         items.push(element);
//     }
//     this.dequeue = function(){
//         return items.shift();
//     }
//     this.front = function(){
//         return items[0];
//     }
//     this.isEmpty = function(){
//         return items.length == 0;
//     }
//     this.clear = function(){
//         items = [];
//     }
//     this.size = function() {
//         return items.length;
//     }
//     this.print = function(){
//         console.log(items.toString());
//     }
// }
// var queue = new Queue();
// console.log(queue.isEmpty());

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element){
    this.dataStore.push(element);
}
function dequeue(){
    return this.dataStore.shift();
}
function front(){
    return this.dataStore[0];
}
function back(){
    return this.dataStore[this.dataStore.length-1];
}
function toString(){
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty(){
    if(this.dataStore.length == 0) {
        return true;
    }
    else{
        return false;
    }
}

var q= new Queue();
q.enqueue("Maredtih");
q.enqueue("Cynthia");

q.enqueue("jannifer");

console.log(q.toString());
q.dequeue();
console.log(q.toString());