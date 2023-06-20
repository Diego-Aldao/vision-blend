import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { UrlImagenes } from "@customTypes/customTypes";

type Props = {
  infoImagen: {
    id: number;
    alt: string;
    src: UrlImagenes;
    photographer: string;
    photographer_id: number;
    photographer_url: string;
  };
  handleClick: (id: number) => void;
};

const ItemImagen: React.FC<Props> = ({ infoImagen, handleClick }) => {
  return (
    <div
      className="w-full relative mb-5 rounded-md overflow-hidden cursor-pointer transition-all"
      onClick={() => handleClick(infoImagen.id)}
    >
      <Image
        src={infoImagen.src.medium}
        alt={infoImagen.alt}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto object-cover"
      />
      <div className="hidden p-5 sm:flex flex-col w-full h-full absolute opacity-0  hover:opacity-100 hover:bg-black/25 z-10 top-0 left-0 transition-all justify-between">
        <div className="interaccion flex items-start justify-end w-full gap-3">
          <span className="p-3 bg-slate-50 rounded">
            <Icon
              icon="ic:outline-bookmarks"
              className=" text-gray-600 w-5 h-5"
            />
          </span>
          <span className="p-3 bg-slate-50 rounded">
            <Icon
              icon="mdi:cards-heart-outline"
              className=" text-gray-600 w-5 h-5"
            />
          </span>
        </div>
        <p className="nombre text-slate-50 capitalize font-medium">
          {infoImagen.photographer}
        </p>
      </div>
    </div>
  );
};

export default ItemImagen;
