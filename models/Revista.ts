import { Material } from "./Material.js";

export class Revista extends Material {
    constructor(
        id: string,
        titulo: string,
        autor: string,
        private numeroEdicion: number
    ) {
        super(id, titulo, autor);
    }

    mostrarInfo(): void {
        console.log(`La revista "${this.titulo}" escrita por ${this.autor} es la edición número ${this.numeroEdicion}.`);
    }
}
