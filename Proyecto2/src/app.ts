import { consultarTransacciones } from './consultar';
import { buscarTransaccion } from './buscar';
import { llenarTransacciones } from './llenar';

// prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;




// Ejemplo de uso de las funciones
async function main() {
    await llenarTransacciones();
    await buscarTransaccion(1); 
    await consultarTransacciones();
}

// Llama a la función principal
main().catch(error => console.error(error));

