CREATE TABLE "Apostador" (
    "id" SERIAL NOT NULL,
    "identificacion" TEXT NOT NULL,
    "nombre" TEXT,
    "estado" TEXT,

    CONSTRAINT "Apostador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Apostador_identificacion_key" ON "Apostador"("identificacion");