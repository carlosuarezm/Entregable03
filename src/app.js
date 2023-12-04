const express = require('express')
const ProductManager = require('./product-manager.class.js')

//Creamos un objeto de tipo ProductManager
let productMgr = new ProductManager('./products.json')

//Guardamos en app todas las funciones de Express
const app = express()

//Agregamos para poder trabajar mejor con la quuery
app.use(express.urlencoded({ extended: true }))

//Ruta /products/:id a traves de un metodo get, :id deberia ser un ID de un prducto a buscar y devuelve un JSON con
// un solo producto, en caso de no encontrar concidencia devuelve un 404
app.get('/products/:id', async (req, res) => {
    let product = await productMgr.getProductById(req.params.id)
    if (product) {
        res.send(JSON.stringify(product))
    } else {
        res.status(404).json({ message: `There is not product with ID ${req.params.id}` });
    }
})

//Ruta /products a traves de un metodo get, devuelve un JSON con un array de productos. Podría recibir una
// query con un valor "limit" que limitaría la cantidad de productos a devolver en el array
app.get('/products', async (req, res) => {

    let { limit } = req.query;
    let products = await productMgr.getProducts(limit)
    if (products) {
        res.send(JSON.stringify(products))
    } else {
        res.send('An error has ocurred. Please try again');
    }
})

app.listen(8080, () => console.log('Servidor escuchando'))