//map 의 forEach매서드

//map 세개의 인자를 가지는 콜백함수를 받는다. 
//map의 다음 위치값, 값에 대한 키, 값을 읽어들이고 있는  map

let map = new Map([["name", "nicholas" ,"22"],["age", "25"]]);

map.forEach(function(value, key, onwerMap){
    console.log(key);
    console.log(value);
    console.log(onwerMap === map);
})
//키와 벨류가 이후 더 있는 "22" 무시됨