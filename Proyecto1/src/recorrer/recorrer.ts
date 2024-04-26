
import { Apostador, datosApostadores, datosEncuentros, datosPronosticos } from "../arreglos/arreglos";



export function mostrarDatos() {
    console.log("Apostadores:");
    datosApostadores.forEach((apostador: Apostador) => {
        console.log(apostador);
    });

    console.log("Encuentros Deportivos:");
    for (let encuentro of datosEncuentros) {
        console.log(encuentro);
    }

    console.log("Pronósticos:");
    for (let i in datosPronosticos) {
        console.log(datosPronosticos[i]);
    }
}

