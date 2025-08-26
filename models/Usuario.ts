import type { IUsuario } from "../interfaces/IUsuario.js";
import { Material } from "./Material.js";

export class Usuario implements IUsuario {
    
    readonly id: string;
    nombre: string;

    private prestados: Material[] = [];

    ultimaPrestacion!: Material;

    constructor(id: string, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    prestar(material: Material): void {
       if(material.getEstaDisponible()) {
           material.setDisponible(false);
           this.prestados.push(material);
           this.ultimaPrestacion = material;
       } else {
           console.log(`El material "${material.titulo}" no está disponible.`);
       }
    }

    mostrarPrestados(): void {
        console.log(`Materiales prestados por ${this.nombre}:`);
        this.prestados.forEach(material => {
            console.log(`- ${material.titulo}`);
        });
    }

    mostrarUltimaPrestacion(): void {
        if (this.ultimaPrestacion) {
            console.log(`Última prestación de ${this.nombre}: ${this.ultimaPrestacion.titulo}`);
        } else {
            console.log(`${this.nombre} no ha realizado ninguna prestación.`);
        }
    }
}
