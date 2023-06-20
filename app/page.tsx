"use client";
import GaleriaHome from "@components/Home/GaleriaHome";
import Header from "@components/Home/Header";
import Seleccion from "@components/Home/Seleccion";
import React, { useState } from "react";

const Inicio = () => {
  const [tipo, setTipo] = useState<string>("imagen");
  return (
    <>
      <Header tipo={tipo} />
      <section className="px-3 md:px-6 lg:px-12 py-5 max-w-[1600px] mx-auto">
        <Seleccion tipo={tipo} setTipo={setTipo} />
        <GaleriaHome tipo={tipo} />
      </section>
    </>
  );
};

export default Inicio;
