class Product{
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

let product = new Product('1','áo thun', 350, 10);

console.log("thông tin sản phẩm là:");
console.log("ID: ", product.id);
console.log("Tên sản phẩm: ", product.name);
console.log("Giá: ", product.price);
console.log("Số lượng: ", product.quantity);