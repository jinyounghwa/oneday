// entries()이터레이터는 next()가 호출 될 때마다 요소가 두 개인 배열을 반환하고 
// 배열에서 첫번째요소는 숫자 인덱스이고 Set에서는 첫번째 요소 또한 값이며 Map는 키이다.

let colors = ["red","green","blue"];
let tracking = new Set([1234,5678,9012]);
let data = new Map();
data.set("title", "undestanding ECMA6");
data.set("format","ebook");

for (let entry of colors.entries()){
    console.log(entry);
}
for (let entry of data.entries()){
    console.log(entry);
}
for (let entry of tracking.entries()){
    console.log(entry);
}

for (let entry of tracking.values()){
    console.log(entry);
}

for (let keys of data.keys()){
    console.log(keys);
}