function createCounterClosure() {
    let count = 0;
    return {
        increse : function(){
            count++
        },
        getCount: function(){
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increse();
counter1.increse();

console.log('counter 1 의 값: ' + counter1.getCount());
counter2.increse();
console.log('counter 2 의 값: ' + counter2.getCount());