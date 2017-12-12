//배열의 모든 수를 합산

var nums = [1,45,2,16,9,12];

var sum = 0;
for (var i=0; i< nums.length; i++){
    sum +=nums[i];
}
console.log(sum);

var nums1 = [1,45,2,16,9,12];

var sum1 = nums1.reduce(function(n1,n2){return n1 + n2;});
console.log(sum1);

var sum2 = nums1.reduce(function(n1,n2){return n1 - n2;});
console.log(sum2);

//reduce 는 배열을 하나의 값으로 만든다.