
export interface Apostador {
    ID: number;
    Nombre: string;
    Identificacion: string;
}

export interface EncuentroDeportivo {
    ID: number;
    Equipo1: string;
    Equipo2: string;
    FechaHora: string;
}

export interface Pronostico {
    ID: number;
    IDApostador: number;
    IDEncuentroDeportivo: number;
    ResultadoPropuesto: string;
    ValorApuesta: number;
}

export const datosApostadores: Apostador[] = [
    { ID: 1, Nombre: "Juan", Identificacion: "12345678A" },
    { ID: 5, Nombre: "Carlos", Identificacion: "21436587E" }
];

export const datosEncuentros: EncuentroDeportivo[] = [
    { ID: 1, Equipo1: "Equipo A", Equipo2: "Equipo B", FechaHora: "2024-04-25 14:00" },
    { ID: 5, Equipo1: "Equipo I", Equipo2: "Equipo J", FechaHora: "2024-04-29 20:30" }
];

export const datosPronosticos: Pronostico[] = [
    { ID: 1, IDApostador: 1, IDEncuentroDeportivo: 1, ResultadoPropuesto: "3-2", ValorApuesta: 50 },
    { ID: 5, IDApostador: 5, IDEncuentroDeportivo: 5, ResultadoPropuesto: "2-3", ValorApuesta: 60 }
];

