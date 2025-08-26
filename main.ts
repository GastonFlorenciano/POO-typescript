import { Libro } from "./models/Libro.js";
import { Revista } from "./models/Revista.js";
import { Usuario } from "./models/Usuario.js";

const libro1 = new Libro("1", "Rayuela", "Julio Cortázar", 560);
const libro2 = new Libro("2", "Cien Años de Soledad", "Gabriel García Márquez", 417);

const revista1 = new Revista("1", "National Geographic", "John Doe", 100);

const usuario1 = new Usuario("1", "Gastón");

console.log(`\n--- LIBROS ---\n`);
libro1.mostrarInfo();
libro2.mostrarInfo();
libro2.setDisponible(false);

console.log(`\n--- REVISTAS ---\n`);
revista1.mostrarInfo();

console.log(`\n--- USUARIOS ---\n`);
usuario1.prestar(libro1);
usuario1.prestar(libro2);
usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();