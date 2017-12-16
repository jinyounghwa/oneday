//객체의 기능 상속하기

function origObject(){
    this.val1 = 'a';
    this.val2 = 'b';
}
origObject.prototype.returnVal1 = function(){
    return this.val1;
}
origObject.prototype.returnVal2 = function(){
    return this.val2;
}

function newObject() {
    this.val3 = 'c';
    origObject.call(this);
}

newObject.prototype = Object.create(origObject.prototype);
newObject.prototype.constructor = newObject;

newObject.prototype.getValues = function(){
    return this.val1 + " " + this.val2 + " " + this.val3;
}

var obj = new newObject();

console.log(obj instanceof newObject);
console.log(obj instanceof origObject);

console.log(obj.getValues());