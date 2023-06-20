"use client";
import NavDetalle from "@components/Detalle/NavDetalle";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Imagen from "@components/Detalle/Imagen";
import Relacionados from "@components/Detalle/Relacionados";
import useDetalle from "@hooks/useDetalle";
import VideoDetalle from "@components/Detalle/VideoDetalle";
import FooterMedia from "@components/Detalle/FooterMedia";

const PaginaDetalle = () => {
  const params = useParams();
  const { categoria, tipo, id } = params;
  const { dataImagen, dataVideo, getDetalle, loading } = useDetalle();

  useEffect(() => {
    getDetalle(id, tipo);
  }, [id]);
  return (
    <section className="pt-14">
      {loading ? (
        <div>...</div>
      ) : (
        <div className="w-full max-w-[1600px] px-3 md:px-6 lg:px-12 mx-auto relative mt-5">
          {dataImagen && (
            <>
              <NavDetalle fotografo={dataImagen.photographer} />
              <Imagen imagenes={dataImagen.src} alt={dataImagen.alt} />
              <FooterMedia alt={dataImagen.alt} url={dataImagen.url} />
            </>
          )}
          {dataVideo && (
            <>
              <NavDetalle fotografo={dataVideo.user.name} />
              <VideoDetalle
                urlImagen={dataVideo.video_pictures[0].picture}
                videos={dataVideo.video_files}
              />
              <FooterMedia
                alt={`video sobre ${categoria}`}
                url={dataVideo.url}
              />
            </>
          )}
        </div>
      )}

      <Relacionados categoria={categoria} tipo={tipo} />
    </section>
  );
};

export default PaginaDetalle;
