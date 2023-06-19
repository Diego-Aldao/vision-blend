import React from "react";
import GaleriaGrid from "../GaleriaGrid/GaleriaGrid";

type Props = {
  tipo: string;
};
const Header: React.FC<Props> = ({ tipo }) => {
  return (
    <header className="my-7 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium first-letter:uppercase">
        {tipo === "imagen" || undefined
          ? "fotos de stock gratuitas"
          : "videos de stock gratuitos"}
      </h2>
    </header>
  );
};

const GaleriaHome: React.FC<Props> = ({ tipo }) => {
  return (
    <>
      <Header tipo={tipo} />
      <GaleriaGrid categoria={"cyberpunk"} tipo={tipo} />
    </>
  );
};

export default GaleriaHome;
