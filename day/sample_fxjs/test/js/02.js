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