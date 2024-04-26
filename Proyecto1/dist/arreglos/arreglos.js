"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosPronosticos = exports.datosEncuentros = exports.datosApostadores = void 0;
exports.datosApostadores = [
    { ID: 1, Nombre: "Juan", Identificacion: "12345678A" },
    { ID: 5, Nombre: "Carlos", Identificacion: "21436587E" }
];
exports.datosEncuentros = [
    { ID: 1, Equipo1: "Equipo A", Equipo2: "Equipo B", FechaHora: "2024-04-25 14:00" },
    { ID: 5, Equipo1: "Equipo I", Equipo2: "Equipo J", FechaHora: "2024-04-29 20:30" }
];
exports.datosPronosticos = [
    { ID: 1, IDApostador: 1, IDEncuentroDeportivo: 1, ResultadoPropuesto: "3-2", ValorApuesta: 50 },
    { ID: 5, IDApostador: 5, IDEncuentroDeportivo: 5, ResultadoPropuesto: "2-3", ValorApuesta: 60 }
];
