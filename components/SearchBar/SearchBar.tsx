"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";

type Display = {
  oculto: boolean | undefined;
  tipo: string | undefined;
};

const SearchBar: React.FC<Display> = ({ oculto, tipo }) => {
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);

  const [currentContent, setCurrentContent] = useState<string>(
    tipo || "imagen"
  );

  useEffect(() => {
    if (!tipo) return;
    setCurrentContent(tipo);
  }, [tipo]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/busqueda/${currentContent}/${value}`);
    setValue("");
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleMouseOver = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <form
      className={`h-full bg-gray-100 rounded w-full min-h-[50px] ${
        oculto ? "hidden" : "flex"
      }`}
      onSubmit={handleSubmit}
    >
      <div
        className="flex items-center p-1 relative group"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        <Dropdown
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
          visible={visible}
        />
        <div className="flex items-center gap-1 bg-gray-200 h-full px-2 rounded border-2 border-gray-300">
          {currentContent === "imagen" || undefined ? (
            <>
              <Icon icon="ic:round-image" className="w-5 h-5" />
              <p className="capitalize sm:block hidden text-lg px-2 ">fotos</p>
            </>
          ) : (
            <>
              <Icon icon="ic:outline-ondemand-video" className="w-5 h-5" />
              <p className="capitalize sm:block hidden text-lg px-2">videos</p>
            </>
          )}

          <Icon
            icon="mdi:chevron-down"
            className="group-hover:rotate-180 transition-all"
          />
        </div>
      </div>
      <input
        type="text"
        className="w-full bg-transparent px-2"
        placeholder={`Buscar ${
          currentContent === "imagen" || undefined ? "imagenes" : "videos"
        } de stock`}
        onChange={handleChange}
        value={value}
      />
      <button
        className="border-l-2 border-gray-200 w-20 flex items-center justify-center"
        type="submit"
      >
        <Icon icon="ic:round-search" className="w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchBar;
