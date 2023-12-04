const express = require('express')
const ProductManager = require('./product-manager.class.js')

let productMgr = new ProductManager('./products.json')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/products/:id', async (req, res) => {
    let product = await productMgr.getProductById(req.params.id)
    if (product) {
        res.send(JSON.stringify(product))
    } else {
        res.status(404).json({ message: `There is not product with ID ${req.params.id}` });
    }
})

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