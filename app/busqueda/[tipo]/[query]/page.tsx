"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import GaleriaGrid from "@components/GaleriaGrid/GaleriaGrid";
import Seleccion from "@components/Home/Seleccion";

const Busqueda = () => {
  const params = useParams();
  const { query, tipo } = params;
  const [mediaType, setMediaType] = useState<string>(tipo ? tipo : "imagen");

  return (
    <section className="pt-20 px-3 max-w-7xl mx-auto">
      <header className="py-10">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl  font-medium first-letter:uppercase">
          {tipo === "imagen" ? "imágenes" : "videos"} de {query}
        </h2>
      </header>
      <Seleccion tipo={mediaType} setTipo={setMediaType} />
      <GaleriaGrid categoria={query} tipo={mediaType} />
    </section>
  );
};

export default Busqueda;
