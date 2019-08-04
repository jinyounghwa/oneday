// if 를 filter로

function f1(limit, list) {
    let acc = 0;
    for (const a of L.filter(a=> a % 2,list)) {
            const b = a * a;
            acc += b;
            if(--limit == 0) break;
    }
    console.log(acc);
}

f1(3,[1,2,3,4,5,6,7,8,9,10]);

function f2(limit, list) {
    let acc = 0;
    for (const a of L.take(limit,L.map(a => a * a, L.filter(a => a % 2 , list)))){
        acc += a;
    }
    console.log(acc);
}
f2(3,[1,2,3,4,5,6,7,8,9,10]);

const add = (a, b) => a + b;
function f3(limit, list) {
    console.log(
        _.reduce(add,        
            L.take(limit,
                L.map(a => a * a, 
                    L.filter(a => a % 2 , list))))
    );
    _.go(
        list,
        L.filter(a => a % 2),
        L.map(a => a * a),
        L.take(limit),
        _.reduce(add),
    )
}
f3(3,[1,2,3,4,5,6,7,8,9,10]);

// function f41(end){
//     let i =0;
//     while ( i < end){
//         console.log(i);
//         ++i;
//     }
// }
// f41(10);

// function f4(end){
//     _.each(console.log,L.range(1,end,2));
// }
// f4(10);

function f4(end){
    _.go(
        L.range(1,end,2),
        _.each(console.log)
    );
}
f4(10);

const join = sep => _.reduce((a,b) => `${a}${b}`);

_.go(
    L.range(1,6),
    L.map(L.range),
    L.map(L.map(_ => '*')),
    L.map(join(' ')),
    join(`\n`),
    console.log);

// _.go(
//     L.range(1,6),
//     L.map( s => _.go(
//         L.range(s),
//         L.map(_ => '*'),
//         _.reduce((a, b) => `${a}${b}`)
//     )),
//     _.reduce((a,b) => '${a}\n{b}'),
//     console.log
// );

_.go(
    _.range(2,10),
    _.map(a => _.go(
        _.range(1,10),
        _.map(b=> `${a}x${b} = ${a*b}`),
        join('\n')
    )),
    join('\n\n'),
    console.log
);

const users = [
    {name:'AA', age:35},
    {name:'BB', age:23},
    {name:'CC', age:30},
    {name:'DD', age:36},
    {name:'EE', age:32}

];

console.log(
    _.reduce((total, u) =>total+u.age, 0, users));

const add = (a, b) => a + b;

console.log(_.reduce(add, L.map(u=> u.age, users)));

const ages = L.map(u => u.age);

console.log(_.reduce(add, ages(users)));

console.log(
    _.reduce(add,
        L.map(u => u.age,
         L.filter(u => u.age < 30, users))));
console.log(
    _.reduce(add,
        L.filter( n=> n < 30,
            L.map(u => u.age, users))));