import React from "react";
import GaleriaGrid from "../GaleriaGrid/GaleriaGrid";

type Props = {
  tipo: string;
};
const Header: React.FC<Props> = ({ tipo }) => {
  return (
    <header className="my-10">
      <h2 className="text-2xl md:text-3xl text-main-black font-medium first-letter:uppercase">
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
