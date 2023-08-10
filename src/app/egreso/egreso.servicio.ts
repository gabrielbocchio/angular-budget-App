import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[] = [
        new Egreso("Renta departamento", 900),
        new Egreso("Ropa", 435.28)
    ];

    eliminar(egreso: Egreso) {
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
      }
}