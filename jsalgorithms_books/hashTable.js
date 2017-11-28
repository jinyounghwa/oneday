function HashTable() {
    
        var table = [];
    
        var loseloseHashCode = function (key) {
            var hash = 0;
            for (var i = 0; i < key.length; i++) {
                hash += key.charCodeAt(i);
            }
            return hash % 37;
        };
    
        var djb2HashCode = function (key) {
            var hash = 5381;
            for (var i = 0; i < key.length; i++) {
                hash = hash * 33 + key.charCodeAt(i);
            }
            return hash % 1013;
        };
    
        var hashCode = function (key) {
            return loseloseHashCode(key);
        };
    
        this.put = function (key, value) {
            var position = hashCode(key);
            console.log(position + ' - ' + key);
            table[position] = value;
        };
    
        this.get = function (key) {
            return table[hashCode(key)];
        };
    
        this.remove = function(key){
            table[hashCode(key)] = undefined;
        };
    
        this.print = function () {
            for (var i = 0; i < table.length; ++i) {
                if (table[i] !== undefined) {
                    console.log(i + ": " + table[i]);
                }
            }
        };
    }

var hash = new HashTable();

hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

hash.print();

var ValuePair = function(key, value) {
    this.key = key;
    this.value = value;

    this.toString = function(){
        return '['+this.key + ' - ' + this.value + ']';
    }
    this.put = function(key,value){
        var position = loseloseHashCode(key);

        if(table[position] == undefined){
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key,value));
    }
    this.get = function(key) {
        var position = loseloseHashCode(key);

        if(table[position] !== undefined) {
            //키 값을 찾기 위해 링크드 리스트를 순회한다.
            var current = table[position].getHead();

            while(current.next){
                if(current.element.key == key){
                    return current.element.value;
                }
                current = current.next;
            }
            //처음이나 마지막 원소일 경우
            if(current.element.key === key){
                return current.element.value;
            }
        }
        return undefined;
    }
    this.remove = function(key){
        var position = loseloseHashCode(key);

        if(table[position]!==undefined){
            var current = table[position].getHead();
            while(current.next) {
                if(current.element.key === key){
                    table[position].remove(current.element);
                    if(table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            //처음이나 마지막 원소일 경우
            if(current.element.key === key){
                table[position].remove(current.element);
                if(table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }
    this.put = function(key, value){
       var position = loseloseHashCode(key);
       
       if(table[position] === undefined) {
           table[position] == new ValuePair(key, value); 
       }else{
           var index = ++position;
           while(table[index] != undefined){
               index++
           }
           table[index] = new ValuePair(key,value);
       }
    }
    this.get = function(key){
        var position = loseloseHashCode(key);

        if(table[position] !== undefined){
            if(table[position].key ===key){
                return table[position].value;
            }else{
                var index = ++position;
                while(table[index] === key){
                    index++
                }
                if(table[index].key === key){
                    return table[index].value;
                }
            }
        }
        return undefined;
    }
}