class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    getById(id) {
        if (this.productos[id]) {
            return this.productos[id]
        } else {
            return { error: 'producto no encontrado' }
        }
    }

    getAll() {
        if (this.productos.length > 0) {
            return this.productos
        } else {
            return { error: 'no hay productos cargados' }
        }
    }

    save(prod) {
        if (prod.title && prod.price && prod.thumbnail) {
            prod.id = this.id
            this.productos.push(prod)
            this.id++
            return prod
        } else {
            return { error: 'producto no valido' }
        }
    }

    updateProduct(prod, id) {
        if (prod.title && prod.price && prod.thumbnail) {
            this.productos[id] = prod
        } else {
            return { error: 'producto no valido' }
        }
    }

    eraseById(id) {
        this.productos.splice(id, 1)
    }
}

export default ProductosApi