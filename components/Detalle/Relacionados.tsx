import GaleriaGrid from "@components/GaleriaGrid/GaleriaGrid";
import React from "react";

type Props = {
  categoria: string;
  tipo: string;
};

const Relacionados: React.FC<Props> = ({ categoria, tipo }) => {
  return (
    <div className="max-w-[1600px] px-3 md:px-6 lg:px-12 mx-auto">
      <header className="py-5">
        <h2 className="capitalize text-2xl text-main-black md:text-3xl lg:text-4xl font-medium">
          contenido similar
        </h2>
      </header>
      <GaleriaGrid categoria={categoria} tipo={tipo} />
    </div>
  );
};

export default Relacionados;
