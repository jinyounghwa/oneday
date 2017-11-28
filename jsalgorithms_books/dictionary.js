function Dictionary (){
    var items ={};

    this.has = function(key){
        return key in items;// key 가 있는지 체크하는 has
    };

    this.set = function(key, value){
        items[key] = value;//key 와 value 를 인자로 받아 [key,value] 형태로 원소를 세팅
    };

    this.remove = function(key) {
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };
    this.get = function(key){
        return this.has(key) ? items[key] : undefined;
    };//어떤 원소를 찾아 그 값을 알고 싶을 때
    
    this.values = function(){
        var values = [];
        for (var k in items) {
            if(this.has(k)){
                values.push(items[k]); //딕셔너리 전체 원소의 값을 배열로 변환해 반환함
            }
        }
        return values;
    }
    this.clear = function(){
        items = {}; //초기화
    }

    this.size = function(){
        return Object.keys(items).length;//keys를 이용하여 객체의 모든프로퍼티를 배열로 반환환다.
    }
    this.keys = function(){
        return Object.keys(items);
    };

    this.getItems = function(){
        return items; //items 를 가져오는 메소드
    }

}
var dictionary = new Dictionary;
dictionary.set('Gandalf','granalf@email.com');
dictionary.set('GLndalf','Lranalf@email.com');
dictionary.set('AAndalf','AAanalf@email.com');

console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('AAndalf'));

dictionary.remove('GLndalf');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());

