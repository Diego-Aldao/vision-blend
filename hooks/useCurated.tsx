import { useState } from "react";

import { RespuestaImagen, Video } from "@customTypes/customTypes";

const useCurated = () => {
  const [dataImagen, setDataImagen] = useState<RespuestaImagen | undefined>();
  const [dataVideo, setDataVideo] = useState<Video | undefined>();

  const getCurated = async (tipo: string) => {
    const url =
      tipo === "imagen"
        ? "https://api.pexels.com/v1/curated?per_page=1"
        : "https://api.pexels.com/videos/videos/4962916";

    try {
      const respuesta = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.PEXELS_API}`,
        },
      });
      const data = await respuesta.json();
      if (tipo === "imagen") {
        setDataImagen(data);
        setDataVideo(undefined);
      } else if (tipo === "video") {
        setDataImagen(undefined);
        setDataVideo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getCurated, dataImagen, dataVideo };
};

export default useCurated;
