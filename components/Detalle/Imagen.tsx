import Image from "next/image";
import React from "react";

type Props = {
  imagenes: {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  };
  alt: string;
};

const Imagen: React.FC<Props> = ({ imagenes, alt }) => {
  return (
    <div className="w-full my-5  mx-auto px-3 relative sm:max-w-fit ">
      <Image
        src={imagenes.large2x}
        alt={alt}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default Imagen;
