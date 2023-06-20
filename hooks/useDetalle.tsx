"use client";

import { useState } from "react";
import { Imagen, Video } from "@customTypes/customTypes";

const useSearch = () => {
  const [dataImagen, setDataImagen] = useState<Imagen | undefined>();
  const [dataVideo, setDataVideo] = useState<Video | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const getDetalle = async (id: string, tipo: string) => {
    setLoading(true);

    const url =
      tipo === "imagen"
        ? `https://api.pexels.com/v1/photos/${id}`
        : `https://api.pexels.com/videos/videos/${id}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.PEXELS_API}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (tipo === "imagen") {
        setDataImagen(data);
        setDataVideo(undefined);
      } else if (tipo === "video") {
        setDataVideo(data);
        setDataImagen(undefined);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { dataImagen, dataVideo, loading, getDetalle };
};

export default useSearch;
