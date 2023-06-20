"use client";
import { useState } from "react";
import { RespuestaImagen, RespuestaVideo } from "@customTypes/customTypes";

const useSearch = () => {
  const [dataImagen, setDataImagen] = useState<RespuestaImagen>();
  const [dataVideo, setDataVideo] = useState<RespuestaVideo>();
  const [loading, setLoading] = useState<boolean>(false);

  const getSearch = async (query: string, tipo: string) => {
    setLoading(true);
    const url =
      tipo === "imagen"
        ? `https://api.pexels.com/v1/search?query=${query}&per_page=40`
        : `https://api.pexels.com/videos/search?query=${query}&per_page=40`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.PEXELS_API}`,
        },
      });
      const data = await response.json();
      tipo === "imagen" ? setDataImagen(data) : setDataVideo(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    resultadosImagenes: dataImagen,
    resultadosVideos: dataVideo,
    loading,
    getSearch,
  };
};

export default useSearch;
