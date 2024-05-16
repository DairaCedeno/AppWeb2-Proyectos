CREATE TABLE "Pronostico" (
    "id" SERIAL NOT NULL,
   "resultadoPropuesto" TEXT,   
  "valorApuesta" INT not null,         
  "estado" TEXT,               
  "apostador" TEXT,            
  "apostadorId" int not null ,          
  "encuentroDeportivo" int not null,
  "encuentroDeportivoId" int not null,

    CONSTRAINT "Pronostico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pronostico_identificacion_key" ON "Pronostico"("identificacion");