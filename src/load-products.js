const ProductManager = require('./product-manager.class.js')
const Product = require('./product.class.js')

let productManager1 = new ProductManager('./products.json')
productManager1.addProduct(new Product("Coca-Cola", "Bebida Gaseosa sabor Cola", 200, "Sin imagen", "coca123", 25))
productManager1.addProduct(new Product("Papas Fritas", "Snack salado", 2150, "Sin imagen", "papitas123", 15))
productManager1.addProduct(new Product("Hot-Dogs", "Pan con salchichas", 50, "Sin imagen", "hotdog123", 100))
productManager1.addProduct(new Product("Chicles", "Goma de mascar", 10, "Sin imagen", "chicle123", 70))
productManager1.addProduct(new Product("Yerba Mate", "Yerba para prepara Mate", 110, "Sin imagen", "yerba123", 25))
productManager1.addProduct(new Product("Chocolate", "Golosina", 75, "Sin imagen", "choco123", 33))
productManager1.addProduct(new Product("Leche", "Bebida lactea", 100, "Sin imagen", "leche123", 50))
productManager1.addProduct(new Product("Agua Mineral", "Bebida de agua", 60, "Sin imagen", "agua123", 62))
productManager1.addProduct(new Product("Chpetin", "Golosina dulce", 10, "Sin imagen", "chupetin123", 200))
productManager1.addProduct(new Product("Agua con Gas", "Bebida de agua gasificada", 60, "Sin imagen", "aguagas123", 78))
