//=========================================================== Clase

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
}

//=========================================================== Métodos

function getFullName() {
    return this.nombre + " " + this.apellido;
}

function addMascota(mascota) {
    this.mascotas.push(mascota);
}

function countMascotas() {
    return this.mascotas.length;
}

function addBook(name, author) {
    const book = {
        name: name,
        author: author
    };
    this.libros.push(book);
}

function getBookNames() {
    return this.libros.map(book => book.name);
}

//=========================================================== Crear un usuario

const usuario = new Usuario("Arthas", "Menethil", [], []);

//=========================================================== Ejecución de métodos

console.log(usuario.getFullName());

usuario.addMascota("Ner'zhul");

usuario.addMascota('Invencible');

console.log(usuario.countMascotas());

usuario.addBook('El señor de los clanes Warcraft', 'Christie Golden');

usuario.addBook('Arthas: La ascención del Rey Exámine', 'Christie Golden');

console.log(usuario.getBookNames());


