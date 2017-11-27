function Set() {
    var items = {};
    this.has = function(value) {
        //return value in items;// in 을 사용하여 해당 원소가 items프로퍼티 중의 하나인지 확인한다.
        return items.hasOwnProperty(value);
    }
    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    }//value가 이미 집합에 포함되어 있는지 확인해야 한다. 없으면 value 넣고 있으면 false
    
    this.remove = function(value){
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    }
    
    this.clear = function(){
        items = {}; //초기화
    }

    this.size = function(){
        return Object.keys(items).length;//keys를 이용하여 객체의 모든프로퍼티를 배열로 반환환다.
    }

    this.sizeLegacy = function(){
        var count = 0;
        for (var prop in items) {
            if(items.hasOwnProperty(prop))
            ++count
        }
        return count;
    }
    this.values = function() {
        return Object.keys(items);
    }
    this.valueLegacy = function(){
        var keys =[];
        for (var key in items){
            keys.push(key);
        }
        return keys;
    }
    this.union = function(otherSet){
       var unionSet = new Set() ;

       var values = this.values();
       for(var i=0;i<values.length; i++){
           unionSet.add(values[i]);
       }
       values = otherSet.values();
       for(var i =0;i<values.length; i++){
           unionSet.add(values[i]);
       }
       return unionSet;
    }
    this.intersection = function(otherSet){
        var intersectionSet = new Set();

        var values = this.values();
        for(var i=0;i<values.length;i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    this.difference = function(otherSet){
        var differenceSet = new Set();

        var values = this.values();
        for(var i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }
        return differenceSet;
    }
    this.subset = function(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        } else {
            var values = this.values();
            for(var i=0; i<values.length;i++){
                return false;
            }
        }
        return true;
    }
}

var setA = new Set();
setA.add(1);
setA.add(2);


var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();
setB.add(2);
setB.add(3);
setB.add(3);


var intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

console.log(setA.subset(setB));
console.log(setA.subset(setC));