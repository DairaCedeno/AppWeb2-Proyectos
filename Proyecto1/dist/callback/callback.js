"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPorID = void 0;
const arreglos_1 = require("../arreglos/arreglos");
function buscarPorID(datos, ID, callback) {
    const elemento = datos.find((item) => item.ID === ID);
    if (elemento) {
        callback(elemento);
    }
    else {
        console.log("Elemento no encontrado");
    }
}
exports.buscarPorID = buscarPorID;
// Uso del callback
buscarPorID(arreglos_1.datosApostadores, 3, (apostador) => {
    console.log("Apostador encontrado:");
    console.log(apostador);
});
