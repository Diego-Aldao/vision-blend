import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

type Props = {
  alt: string;
  url: string;
};

const FooterMedia: React.FC<Props> = ({ alt, url }) => {
  return (
    <div className="flex justify-between px-5">
      <p className="flex gap-3 text-gray-500 overflow-hidden w-1/2 md:w-2/3">
        <span className="flex items-center gap-1 min-w-fit">
          <Icon icon="ic:round-check-circle" />
          uso gratuito
        </span>
        <span className="items-center gap-1 whitespace-nowrap hidden md:flex">
          <Icon icon="ic:round-closed-caption" className="w-5 h-5 block" />
          {alt}
        </span>
      </p>

      <Link
        href={url}
        target="_blank"
        className="flex items-center px-4 py-2 border-2 border-gray-100 rounded-md text-gray-500 gap-1"
      >
        <Icon icon="ic:baseline-download-for-offline" className="w-6 h-6" />
        <span className="hidden sm:inline-block ">Descargar en pexels</span>
      </Link>
    </div>
  );
};

export default FooterMedia;
