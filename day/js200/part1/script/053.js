//정적 메소드는 클래스를 통해 직접 호출하는 메소드를 말한다. static

class Product {
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price)
    }
    static getTaxPrice(product) {
        return (product.price * 0.1)  + product.price;
    }
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class DeposableProduct extends Product {
    depose(){
        this.depose = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, '옷', 2000);
const texPrice = DeposableProduct.getTaxPrice(clothes);
console.log(texPrice);