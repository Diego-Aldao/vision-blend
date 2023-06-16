import GaleriaGrid from "@components/GaleriaGrid";
import React from "react";

type Props = {
  categoria: string;
  tipo: string;
};

const Relacionados: React.FC<Props> = ({ categoria, tipo }) => {
  return (
    <div className="px-3 max-w-7xl mx-auto">
      <header className="py-5">
        <h2 className="capitalize text-2xl font-medium">contenido similar</h2>
      </header>
      <GaleriaGrid categoria={categoria} tipo={tipo} />
    </div>
  );
};

export default Relacionados;
