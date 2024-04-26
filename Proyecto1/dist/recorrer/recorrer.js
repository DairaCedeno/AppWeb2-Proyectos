"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarDatos = void 0;
const arreglos_1 = require("../arreglos/arreglos");
function mostrarDatos() {
    console.log("Apostadores:");
    arreglos_1.datosApostadores.forEach((apostador) => {
        console.log(apostador);
    });
    console.log("Encuentros Deportivos:");
    for (let encuentro of arreglos_1.datosEncuentros) {
        console.log(encuentro);
    }
    console.log("Pronósticos:");
    for (let i in arreglos_1.datosPronosticos) {
        console.log(arreglos_1.datosPronosticos[i]);
    }
}
exports.mostrarDatos = mostrarDatos;
