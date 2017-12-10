var fruitarry = [];
fruitarry[0] = ['strawberry', 'orange'];
fruitarry[1] = ['lime', 'peach'];
fruitarry[2] = ['tangerine', 'apricot'];
fruitarry[3] = ['raspberry', 'kiwi'];

console.log(fruitarry);//2차원 배열

//배열평탄화
var newArry = fruitarry.concat.apply([], fruitarry);
console.log(newArry[5]);// 1차원 배열