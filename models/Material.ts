import type { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";

export abstract class Material implements IBibliotecaItem {
  constructor(
    public readonly id: string,
    public titulo: string,
    public autor: string,
    protected disponible: boolean = true
  ) {}

  getEstaDisponible(): boolean {
    return this.disponible;
  }

  setDisponible(valor: boolean): void {
    this.disponible = valor;
  }

  abstract mostrarInfo(): void;
}
