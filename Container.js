const fs = require('fs')

class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.thumbnail = 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png';
    }
}

class Container {
    constructor(rutaArchivo) {
        this.rutaArchivo = rutaArchivo;
        try {
            this.products = JSON.parse(fs.readFileSync(this.rutaArchivo, 'utf-8'));
        } catch (error) {
            console.log(error);
        }
    }

    save(title, price) {

        try {
            let newProduct = new Product(title, price);
            if (this.products.length == 0) {
                newProduct.id = 1;
            }
            else {
                newProduct.id = this.products[this.products.length - 1].id + 1;
            }
            this.products.push(newProduct);
            fs.promises.writeFile(this.rutaArchivo, JSON.stringify(this.products, null, '\t'))
            .then(() => console.log('Archivo guardado'))
            .catch((error) => console.log(error));
        }
        catch (error) {
            console.log(error);
        }}

    getById(id) {
        try {
            this.products = this.products.filter((product) => product.id == id);
            return this.products;
        }
        catch (e){
            console.log(e);
        }
    } 

    getAll() {
        return this.products;
    }

    getRandom() {
        return this.products[Math.floor(Math.random() * this.products.length)];
    }

    deleteById(id) {
        try {
            this.products = this.products.filter((product) => product.id != id);
            fs.promises.writeFile(this.rutaArchivo, JSON.stringify(this.products, null, '\t'))
            .then(() => console.log('Archivo eliminado', id))
            .catch(() => console.log("error"));
        }
        catch (e){
            console.log("error");
        }
    }

    deleteAll() {
        fs.promises.writeFile(this.rutaArchivo, JSON.stringify([], null, '\t'))
    }
}

module.exports = Container;

//let products = new Container('./productos.txt');
//products.save('lapiz', 10);
//products.save('borrador', 5);
//products.save('cuaderno', 20);
////products.deleteById(2);
//console.log(products.getAll());
//console.log(products.getById(1));
//console.log(products.getRandom());
//products.deleteAll();
//products.save('lapiz', 10);
//products.save('borrador', 5);
//products.save('cuaderno', 20);