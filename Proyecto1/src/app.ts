
// Llamar a la función mostrarDatos, que mostrará los datos de los arreglos. 

import { mostrarDatos } from "../src/recorrer/recorrer";
mostrarDatos();


// Llamar a la función buscarPorID que contiene el callback. 

import { Apostador, datosApostadores } from "../src/arreglos/arreglos";
import { buscarPorID } from "../src/callback/callback";

buscarPorID<Apostador>(datosApostadores, 1, (apostador: Apostador) => {
    console.log("Apostador encontrado:");
    console.log(apostador);
});

