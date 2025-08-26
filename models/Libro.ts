import { Material } from "./Material.js";

export class Libro extends Material {
    constructor(
        id: string,
        titulo: string,
        autor: string,
        private numeroPaginas: number,
        private genero?: string
    ) {
        super(id, titulo, autor);
    }

    mostrarInfo(): void {
        console.log(`El libro "${this.titulo}" escrito por ${this.autor} tiene ${this.numeroPaginas} páginas.`);
        if (this.genero) {
            console.log(`Género: ${this.genero}`);
        }
    }
}
