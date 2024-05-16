// prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma }; // Exporta prisma como un módulo nombrado
