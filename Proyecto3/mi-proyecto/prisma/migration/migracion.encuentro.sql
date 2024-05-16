CREATE TABLE "Encuentro" (
    "id" SERIAL NOT NULL,
    "equipo1" TEXT,
    "equipo2" TEXT,
    "fecha" int,
    "hora"int,
    "estado" TEXT,

    CONSTRAINT "Encuentro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Encuentro_identificacion_key" ON "Encuentro"("identificacion");