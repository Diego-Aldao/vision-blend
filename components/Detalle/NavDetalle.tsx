"use client";
import React from "react";
import { Icon } from "@iconify/react";

type Props = {
  fotografo: string;
};

const NavDetalle: React.FC<Props> = ({ fotografo }) => {
  return (
    <div className="w-full flex py-3 px-3 bg-white justify-between items-center sticky top-20 left-0 z-10">
      <p className="capitalize font-medium">{fotografo}</p>
      <div className="flex gap-2">
        <div className="p-2 border-2 rounded-md flex items-center gap-2">
          <Icon icon="ic:outline-bookmarks" className=" text-gray-600" />
          <span className="capitalize sm:block hidden">guardar</span>
        </div>
        <div className="p-2 border-2 rounded-md flex items-center gap-2">
          <Icon icon="mdi:cards-heart-outline" className=" text-gray-600" />
          <span className="capitalize sm:block hidden">me gusta</span>
        </div>
      </div>
    </div>
  );
};

export default NavDetalle;
