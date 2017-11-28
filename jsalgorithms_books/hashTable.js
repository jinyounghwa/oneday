function HashTable () {
    var table=[];

    var loseloseHashCode = function(key) { //프라이빗 메소드 key문자열의 길이만큼 루프반복 후 문자열 아스키값을 hash에 더함
        var hash = 0;
        for(var i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % 34;
    }

    this.put = function(key, value){
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    }
    this.get = function(key) {
        table[loseloseHashCode(key)];
    }
    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;
    }
}

var hash = new HashTable();

hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'Johnsnow@email.com');
hash.put('Trion', 'trion@email.com');