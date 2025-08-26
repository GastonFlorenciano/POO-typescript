import { Material } from "../models/Material.js";

export interface IUsuario {
  readonly id: string;
  nombre: string;
  prestar(material: Material): void;
}
