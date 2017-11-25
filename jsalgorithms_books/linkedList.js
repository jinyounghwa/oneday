function LinkedList () {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    };
    var length =0;
    var head = null;
    this.append = function(element){};
    this.insert = function(position, element){};
    this.removeAt = function(position){};
    this.remove = function(element){};
    this.indexOf = function(element){};
    this.isEmpty = function(){};
    this.size = function(){};
    this.toString = function(){};
    this.print = function(){};
}

this.append = function(element){
    var node = new Node(element),
    current;

    if(head === null){ //리스트가 비어 있다면
        head = node;
    } else{
        current = head;
        //마지막 원소를 발견할 때까지 계속 루프 순환한다.
        while(current.next){
        current = current.next;
        }
        
    //마지막 원소를 링크 할 수 있게 다음 노드에 할당한다.
    current.next = node;
    }
    length++; // 리스트의 크기를 업데이트 한다. 
}
var list = new LinkedList();
list.append(15);
list.append(10);

this.removeAt = function(position) {
    //범의 외의 값인지 확인한다.
    if(position > -1 && position < length){
        var current =  head,
        previous,
        index=0;
        //첫 번째 원소 삭제
        
        if(position = 0){
            head = current.next;
        } 
        else{
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            //현재의 다음과 이전 것을 연결한다. : 삭제하기 위해 건너뛴다.
            previous.next = current.next;
        }
            length--;
            return current.element;
    } else {
        return null;
    }
}; 
this.insert = function(position, element) {

    //범위 외의 값인지 체크한다.
    if(position >=0 && position <= length) {
        var node = new Node(element),
        current = head,
        previous,
        index = 0;
         if(position ===0){
             node.next = current;
             head = node;
         }else {
             while(index++ < position){
                 previous = current;
                 current = current.next;
             }
             node.next = current;
             previous.next = node;
         }
         length++; //리스트 크기를 업데이트 한다.
         return true;
    } else {
        return false;
    }
}