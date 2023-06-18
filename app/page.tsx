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
      <section className="px-3 py-5">
        <Seleccion tipo={tipo} setTipo={setTipo} />
        <GaleriaHome tipo={tipo} />
      </section>
    </>
  );
};

export default Inicio;
