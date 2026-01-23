import type { UUIDTypes } from "uuid";

export interface IUser {
  readonly id: UUIDTypes;
  nombre: string;
  apellido: string;
  ciudad: string;
  edad: number;
  correo: string;
}
