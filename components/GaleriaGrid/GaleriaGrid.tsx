"use client";
import { useRouter } from "next/navigation";
import useSearch from "@hooks/useSearch";
import { useEffect } from "react";
import ItemImagen from "./ItemImagen";
import ItemVideo from "./ItemVideo";

type Props = {
  categoria: string;
  tipo: string;
};

const GaleriaGrid: React.FC<Props> = ({ categoria, tipo }) => {
  const { resultadosImagenes, resultadosVideos, getSearch, loading } =
    useSearch();
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/detalle/${tipo}/${categoria}/${id}`);
  };

  useEffect(() => {
    getSearch(categoria, tipo);
  }, [categoria, tipo]);

  return (
    <>
      {loading ? (
        <div>cargando...</div>
      ) : (
        <div className="columns-2 sm:columns-xs max-w-7xl mx-auto">
          {tipo === "imagen" ? (
            <>
              {resultadosImagenes?.photos?.map(
                ({
                  id,
                  alt,
                  src,
                  photographer,
                  photographer_id,
                  photographer_url,
                }) => (
                  <ItemImagen
                    infoImagen={{
                      id,
                      alt,
                      src,
                      photographer,
                      photographer_id,
                      photographer_url,
                    }}
                    key={id}
                    handleClick={handleClick}
                  />
                )
              )}
            </>
          ) : (
            <>
              {resultadosVideos?.videos?.map(
                ({ id, video_files, video_pictures, user }) => (
                  <ItemVideo
                    infoVideo={{ id, video_files, video_pictures, user }}
                    handleClick={handleClick}
                    key={id}
                  />
                )
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GaleriaGrid;
