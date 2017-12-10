var animals = new Array("dog", "cat", "seal", "walrus", "lion", "cat");

console.log(animals.indexOf("cat"));
console.log(animals.lastIndexOf("cat")); // 5 마지막에 검색한 값을 반환 : 마지막에 cat가 있기 때문

var arrayanimals = ["dog", "cat", "seal", "walrus", "lion", "cat"];
console.log(arrayanimals.indexOf("cat", 2));
console.log(arrayanimals.lastIndexOf("cat", 4));

var nums = [2,4,19,15,183,6,7,1,1];
var over = nums.findIndex(function(element){
    return (element >= 100);
})
console.log([nums[over]]);