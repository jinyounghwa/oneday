for(const i of (function*(){
    let i = 0;
    while(true) yield i++;
})()) console.log(i);

//script timeout

const f = v =>{
    let i = 0;
    while(i++ < v);
    return i;
};
f(10);
f(10000000000000);

//time slicing manual
const looper = (n, f, slice = 3)=>{
    let limit = 0, i = 0;
    const runner =_=>{
        while(i < n){
            if(limit++ < slice) f(i++);
            else{
                limit = 0;
                requestAnimationFrame(runner);
                break;
             }
        }
    };
    requestAnimationFrame(runner);
};
looper(12, console.log);    

//time slicing auto
const looper = (n, f, ms = 5000, i = 0)=>{
    let old = performance.now(), curr;
    const runner =_=>{
        while(i < n){
            curr = performance.now();
            if(curr - old < ms) f(i++);
            else{
                old = curr;
                 requestAnimationFrame(runner);
                break;
            }
        }
    };
    requestAnimationFrame(runner);
};


//web worker
const backRun = (f, end, ...arg)=>{
    const blob = new Blob([`
    onmessage =e=>postMessage((${f})(e.data));
    `], {type:'text/javascript'});
    const url = URL.createObjectURL(blob);
    const worker = new Worker(url);
    worker.onmessage =e=>end(e.data);
    worker.onerror =e=>end(null);
    worker.postMessage(arg);
};
backRun(v=>v[0] + v[1], console.log, 3, 5);

//non blocking
const a = 123;
looper(12, console.log);
backRun(v=>v[0] + v[1], console.log, 3, 5);
console.log(a); //어쨌든 콘솔은 123부터 출력

//SYNC 서브루틴이 즉시 값을 반환함
const double = v=>v*2;
console.log(double(2)); //4

//ASYNC 서브루틴이 콜백을 통해 값을 반환함
const double = (v, f)=>f(v*2);
double(2, console.log); //4

//SYNC_Blocking, NON Blocking

//SYNC Block 즉시 플로우 제어권을 반환하지 않음
const sum = n=>{
    let sum = 0;
    for(let i = 1; i <= n; i++) sum += i;
    return sum;
};
sum(100);
//SYNC non block 즉시 플로우제어권을 반환함   
const sum = n=>{
    const result = {isComplete:false};
    requestAnimationFrame(_=>{
        let sum = 0;
        for(let i = 1; i <= n; i++) sum += i;
        result.isComplete = true;
        result.value = sum;
    });
};
const result = sum(100);
while(!result.isComplete);
console.log(result.value); 

//async_Blocking, NON Blocking 서브루틴이 콜백을 통해 값을 반환함

//async block 즉시 플로우제어권을 반환하지 않음
const sum = (n, f)=>{
    let sum = 0;
    for(let i = 1; i <= n; i++) sum += i;
    return f(sum);
};
sum(10, console.log);
console.log(123);
//55 → 123

//async non block 즉시 플로우제어권을 반환함
const sum = (n, f)=>{
    requestAnimationFrame(_=>{
        let sum = 0;
        for(let i = 1; i <= n; i++) sum += i;
        f(sum);
    });
};
sum(10, console.log);
console.log(123);
//123 → 55

//similar async-block(anti pattern)
//similar async-block
const sum = (n, f)=>{
    requestAnimationFrame(_=>{
        let sum = 0;
        for(let i = 1; i <= n; i++) sum += i;
        f(sum);
    });
};
sum(100000000, console.log);
console.log(123);


const backRun = (f, end, ...arg)=>{
    const blob = new Blob([`
    onmessage =e=>postMessage((${f})(e.data));
    `], {type:'text/javascript'});
    const url = URL.createObjectURL(blob);
    const worker = new Worker(url);
    worker.onmessage =e=>end(e.data);
    worker.onerror =e=>end(null);
    worker.postMessage(arg);
};
//이건 실행하는 함수 (아래)가 문제
const f = v=>{
    for(let i = 1, sum = 0; i <= v[0]; i++){
        sum += i;
    }
    return sum;
};
let i = 1000;
while(i--) backRun(f, console.log, 100000);

//breaking block - 프로그램을 중도에 멈췄다가 다시 실행할 수 있음
const infinity = (function*(){
    let i = 0;
    while(true) yield i++;
    })();
console.log(infinity.next());
console.log(infinity.next());


//time slicing manual using generator
const loop = function*(n, f, slice = 3){
    let i = 0, limit = 0;
    while(i < n){
        if(limit++ < slice) f(i++);
        else{
            limit = 0;
            yield;
        }
    }
};
const executor =iter=>{
    const runner =_=>{
        iter.next();
        requestAnimationFrame(runner);
    };
    requestAnimationFrame(runner);
};

//generator + async + executor
const profile = function*(end, next, r){
    const userid = yield $.post('member.php', {r}, next);
    let added = yield $.post('detail.php', {userid}, next);
    added = added.split(",");
    end({userid, nick:added[0], thumb:added[1]});
};
const executor = (end, gene,...arg)=>{
    const next =v=>iter.next(v);
    const iter = gene(end, next,...arg);
    iter.next();
};
generator + async + executor
executor(profile, console.log, 123);

//프라미스는 then을 호출해야 결과를 얻는다.
let result;
const promise = new Promise(r=>$.post(url1, data1, r));
promise.then(v=>{
    result = v;
});
const promise1 = new Promise(r=>$.post(url1, data1, r));
const promise2 = new Promise(r=>$.post(url2, data2, r));
    promise1.then(result=>{
        promise2.then(v=>{
            result.nick = v.nick;
            report(result);
    });
});
//generator + promise
const profile = function*(end, r){
    const userid = yield new Promise(res=>$.post('member.php', {r}, res));
    let added = yield new Promise(res=>$.post('detail.php', {userid}, res));
    added = added.split(",");
    end({userid, nick:added[0], thumb:added[1]});
};
const executor = (gene, end, ...arg)=>{
    const iter = gene(end, ...arg);
    const next = ({value, done}) =>{
        if(!done) value.then(v=>next(iter.next(v)));
    };
    next(iter.next());
};
executor(profile, console.log, 123);


//await promise = sync
const profile = async function(end, r){
    const userid = await new Promise(res=>$.post('member.php', {r}, res));
    let added = await new Promise(res=>$.post('detail.php', {userid}, res));
    added = added.split(",");
    end({userid, nick:added[0], thumb:added[1]});
};
profile(console.log, 123);