"use client";
import React, { useEffect } from "react";

import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import useCurated from "@hooks/useCurated";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  tipo: string;
};

const tendencias = [
  {
    id: 1,
    nombre: "tecnologia",
  },
  {
    id: 2,
    nombre: "comida",
  },
  {
    id: 3,
    nombre: "autos",
  },
  {
    id: 4,
    nombre: "playa",
  },
  {
    id: 4,
    nombre: "flores",
  },
];

const Header: React.FC<Props> = ({ tipo }) => {
  const [oculto, setOculto] = useState<boolean>(false);
  const { getCurated, dataImagen, dataVideo } = useCurated();
  const router = useRouter();

  useEffect(() => {
    getCurated(tipo);
  }, [tipo]);

  const handleClick = (nombreTendencia: string): void => {
    router.push(`/busqueda/${tipo}/${nombreTendencia}`);
  };

  return (
    <div className="pagina-principal-header py-16 px-3 relative lg:py-24">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {dataImagen && (
          <Image
            src={dataImagen.photos[0].src.landscape}
            alt={""}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        )}
        {dataVideo && (
          <>
            <Image
              src={dataVideo.image || ""}
              alt={""}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <video
              autoPlay
              loop
              muted
              className="w-full h-full absolute top-0 left-0 object-cover"
            >
              <source src={dataVideo.video_files[6].link} type="video/mp4" />
            </video>
          </>
        )}
      </div>
      <div className="relative z-10 pt-10 max-w-[630px] mx-auto">
        <h1 className="text-slate-50 text-3xl lg:text-4xl  font-medium">
          Las mejores fotos y videos de stock gratis, libres de regalías y
          compartidos por creadores
        </h1>
        <div className=" my-7">
          <SearchBar oculto={oculto} tipo={tipo} />
        </div>
        <p className="text-gray-300 flex overflow-hidden text-lg font-medium">
          Tendencias:
          {tendencias.map((tendencia) => (
            <span
              className="px-1 text-slate-50 after:content-[',']  last:after:content-[''] hover:text-gray-300 transition-all cursor-pointer"
              key={tendencia.id}
              onClick={() => {
                handleClick(tendencia.nombre);
              }}
            >
              {tendencia.nombre}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Header;
