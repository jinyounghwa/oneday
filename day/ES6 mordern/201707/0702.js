//객체를 이터러블로 만들기

let collection = {
    items : [],
    *[Symbol.iterator](){
        for (let items of this.items){
            yield items;
        }
    }
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection) {
    console.log(x);
}

