import prisma from './app';

// Función para insertar transacciones (Pronosticos)
export async function llenarTransacciones(): Promise<void> {
    try {
        //  insertar 10 elementos en la entidad transaccional (Pronosticos)
        const transacciones: any[] = [];
        for (let i = 0; i < 10; i++) {
            const pronostico = await prisma.pronostico.create({
                data: {
                    resultadoPropuesto: "Resultado " + i,
                    valorApuesta: 10.5 * i,
                    apostador: {
                        connect: { id: 1 } // ID de un Apostador existente
                    },
                    encuentroDeportivo: {
                        connect: { id: 1 } // ID de un EncuentroDeportivo existente
                    }
                }
            });
            transacciones.push(pronostico);
        }
        console.log("Transacciones insertadas correctamente:", transacciones);
    } catch (error) {
        console.error("Error al llenar transacciones:", error);
    } finally {
        await prisma.$disconnect();
    }
}


