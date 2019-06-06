// function Stack() {
//     this.dataStore = [];
//     this.top = 0;
//     this.push = push;
//     this.pop = pop;
//     this.peek = peek;
//     this.length = length;
// }
// function push(element){
//     this.dataStore[this.top++] = element;
// }
// function pop(){
//     return this.dataStore[--this.pop];
// }
// function peek(){
//     return this.dataStore[this.top-1];
// }
// function length(){
//     return this.top;
// }
// function clear(){
//     this.top = 0;
// }

// var s = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// console.log("length: " + s.length());
// console.log(s.peek());
// var popped = s.pop();
// console.log("thie popped element is: " + popped);
// console.log(s.peek());

function Stack(){
    var items = [];
    this.push = function(element){
        items.push(element);
    };
    this.pop = function(){
        return items.pop();
    }
    this.peek = function(){
        return items[items.length-1];
    }
    this.isEmpty = function(){
        return items.length == 0;
    };
    this.size = function(){
        return items.length;
    }
    this.clear = function(){
        items = [];
    };
    this.print = function(){
        console.log(items.toString());
    }
    this.top = function(){
        items = 0;
    }
    this.length = function(){
        return this.top;
    }
}



//문자열이 회전문인지 검사
function isPalindrome(word){
    var s = new Stack();
    for (var i = 0; i < word.length; i++){
        s.push(word[i]);
    }
    var rword = "";
    while(s.length() > 0){
        rword += s.pop();
    }
    if(word == rword){
        return true;
    }
    else{
        return false;
    }
}
var word = "hello";
if(isPalindrome(word)) {
    console.log(word + " is a palindrome");
}
else{
    console.log(word + " is not a palindrome");
}
word = "racecar";
if(isPalindrome(word)){
    console.log(word + " is a palindrome");
}
else{
    console.log(word + " is not a palindrome")
}