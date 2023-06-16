"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";

type Display = {
  oculto: boolean | undefined;
};

const SearchBar: React.FC<Display> = ({ oculto }) => {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const [currentContent, setCurrentContent] = useState<string>("imagen");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/busqueda/${currentContent}/${value}`);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <form
      className={`h-full bg-slate-50 rounded w-full ${
        oculto ? "hidden" : "flex"
      }`}
      onSubmit={handleSubmit}
    >
      <div className="flex items-center p-1">
        <Dropdown
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
        />
      </div>
      <input
        type="text"
        className="w-full bg-slate-50 px-2"
        placeholder="Buscar imágenes o videos de stock"
        onChange={handleChange}
        value={value}
      />
      <button
        className="border-l-2 border-gray-100 w-20 flex items-center justify-center"
        type="submit"
      >
        <Icon icon="ic:round-search" className="w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchBar;
