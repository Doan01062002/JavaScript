class Product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

var products = [
    new Product(1,'Iphone 12', 20000000),
    new Product(2,'Iphone 11', 10000000),
    new Product(3,'Samsung not 10', 50000000),
];


function sortProductsByPrice(products) {
    for (let i = 0; i < products.length - 1; i++) {
      for (let j = i + 1; j < products.length; j++) {
        if (products[i].price > products[j].price) {
          let temp = products[i];
          products[i] = products[j];
          products[j] = temp;
        }
      }
    }
    return products;
}

console.log(sortProductsByPrice(products));