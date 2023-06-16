"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import GaleriaGrid from "@components/GaleriaGrid";
import Seleccion from "@components/Home/Seleccion";

const Busqueda = () => {
  const params = useParams();
  const { query, tipo } = params;
  const [mediaType, setMediaType] = useState<string>(tipo ? tipo : "imagen");

  return (
    <main className="pt-14 px-3 max-w-7xl mx-auto">
      <header className="py-10">
        <h2 className="text-3xl font-medium capitalize">
          {tipo} gratis de {query}
        </h2>
      </header>
      <Seleccion tipo={mediaType} setTipo={setMediaType} />
      <GaleriaGrid categoria={query} tipo={mediaType} />
    </main>
  );
};

export default Busqueda;
