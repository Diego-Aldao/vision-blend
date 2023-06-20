"use client";
import React from "react";

type Props = {
  tipo: string;
  setTipo: React.Dispatch<React.SetStateAction<string>>;
};

const Seleccion: React.FC<Props> = ({ tipo, setTipo }) => {
  const handleClick = (currentTipo: string) => {
    setTipo(currentTipo);
  };

  return (
    <ul className="m-5  flex gap-5 w-full items-center justify-center max-w-7xl mx-auto">
      <li
        className={`text-lg text-main-black capitalize cursor-pointer p-3 rounded [&.active]:bg-main-blue [&.active]:text-slate-50 ${
          tipo === "imagen" ? "active" : ""
        }`}
        onClick={() => {
          handleClick("imagen");
        }}
      >
        imágenes
      </li>
      <li
        className={`text-lg text-main-black capitalize cursor-pointer p-3 rounded [&.active]:bg-main-blue [&.active]:text-slate-50 ${
          tipo === "video" ? "active" : ""
        }`}
        onClick={() => {
          handleClick("video");
        }}
      >
        videos
      </li>
    </ul>
  );
};

export default Seleccion;
