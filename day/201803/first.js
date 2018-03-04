//매개변수  ES5

function mixArgs(first, secound){
    console.log(first === arguments[0]);
    console.log(secound === arguments[1]);
    first = "c";
    secound = "d";
    console.log(first === arguments[0]);
    console.log(secound === arguments[1]);
}
mixArgs("a","b");

//srtict 모드가 아닌 경우
console.log("strict");
function mixArgs1(first, secound="b"){
    console.log(first === arguments[0]);
    console.log(secound === arguments[1]);
    first = "c";
    secound = "d";
    console.log(first === arguments[0]);
    console.log(secound === arguments[1]);
}
mixArgs1("a");