function Queue() {
    var items =[];
    this.enqueue = function(element){
        items.push(element);
    };
    this.dequeue = function(){
        return items.shift();
    };
    this.front = function() {
        return items[0];
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
    this.size = function(){
        return items.length;
    };
    this.print = function(){
        console.log(items.toString());
    };
}

var queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("john");
queue.enqueue("jack");
queue.enqueue("camila");
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();
// 우선순위 큐 (priority queue)
function PriorityQueue(){
    var items =[];

    function QueueElement (element, priority){
        this.element = element;
        this.priority = priority;
    }
    
    this.enqueue = function(element, priority){
        let queueElement = new QueueElement(element, priority);

        let added = false;
        for (let i =0; i<items.length; i++){
            if(queueElement.priority < items[i].priority) {
                items.splice(i,0,queueElement);
                added = true;
                break;
            }
        }
        if(!added){
            items.push(queueElement);
        }
    };
    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.print = function(){
        for (let i=0; i<items.length; i++){
            console.log(`${items[i].element}  - ${items[i].priority}`);
        }
    };
}
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();