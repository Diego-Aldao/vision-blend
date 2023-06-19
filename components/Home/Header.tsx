"use client";
import React, { useEffect } from "react";

import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import useCurated from "@hooks/useCurated";
import Image from "next/image";

type Props = {
  tipo: string;
};

const Header: React.FC<Props> = ({ tipo }) => {
  const [oculto, setOculto] = useState<boolean>(false);
  const { getCurated, dataImagen, dataVideo } = useCurated();

  useEffect(() => {
    getCurated(tipo);
  }, [tipo]);

  return (
    <div className="pagina-principal-header py-16 px-3  relative lg:py-28">
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
      <div className="relative z-10 pt-10 max-w-2xl mx-auto">
        <h1 className="text-white text-4xl font-medium">
          Las mejores fotos de stock gratis, imágenes libres de regalías y
          videos compartidos por creadores
        </h1>
        <div className=" my-7">
          <SearchBar oculto={oculto} tipo={tipo} />
        </div>
        <p className="text-gray-300 flex overflow-hidden text-lg">
          Tendencias: <span className="px-1 text-white">tecnologia</span>
          <span className="px-1 text-white">playa,</span>
          <span className="px-1 text-white">comida,</span>
          <span className="px-1 text-white">naturaleza,</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
