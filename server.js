const express = require ('express');
const app = express()
const PORT = 8080;
const Container = require('./Container.js');

const products = new Container('./productos.txt');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
    res.send(products.getAll());
});

app.get('/productsRandom', (req, res) => {
    res.send(products.getRandom());
});

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
})

app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
});
