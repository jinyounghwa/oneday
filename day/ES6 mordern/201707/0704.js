//구조분해와 for-of 문
//Map 에서 기본 이터레이터의 동작은 for-of문 내에서 구조분해와 함께 사용될 때 좋음

let data = new Map();

data.set("title","understanding es6");
data.set("format","book");

//data.entries()와 동일

for (let [key,value] of data) {
    console.log(key + "=" + value);
}

//노드리스트

var divs = document.getElementsByTagName("div");

for (let div of divs) {
    console.log(div.id);
}