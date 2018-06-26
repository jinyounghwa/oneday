//비공개 파라미터 

let Person = (function(){
    let privateData = new WeakMap();

    function Person(name) {
        privateData.set(this,{name:name});
    }

    Person.prototype.getName = function(){
        return privateData.get(this).name;
    };
    return Person;
})();

//weakMap 사용시 항상 객체키만사용할 경우, 메모리 누수를 피할경우
//이터레이블한 경우나 size(), clear() 필요한 경우 Map 써야 함
