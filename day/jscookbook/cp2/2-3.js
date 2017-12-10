//배열요소 삭제 또는 치환

var animals = new Array("dog", "cat", "seal", "walrus", "lion", "cat");

//배열에서 요소 삭제하기
animals.splice(animals.indexOf("walrus"), 1);

//새로운 요소 삽입하기 
animals.splice(animals.lastIndexOf("cat"),1,"monkey");

console.log(animals.toString());