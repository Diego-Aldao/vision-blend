import React from "react";
import { Icon } from "@iconify/react";

type Props = {
  currentContent: string;
  setCurrentContent: React.Dispatch<React.SetStateAction<string>>;
  visible: boolean;
};

const Dropdown: React.FC<Props> = ({
  currentContent,
  setCurrentContent,
  visible,
}) => {
  const handleClick = (tipo: string) => {
    setCurrentContent(tipo);
  };

  return (
    <div
      className={`absolute border-[1px] border-gray-300 top-full left-0 py-3 w-full min-w-min flex-col rounded-lg shadow-lg bg-slate-50 ${
        visible ? "flex" : "hidden"
      }`}
    >
      <div
        className={`flex items-center text-main-black hover:text-main-blue hover:bg-gray-100 cursor-pointer px-3 py-1 [&.active]:text-main-blue ${
          currentContent === "imagen" ? "active" : ""
        }`}
        onClick={() => {
          handleClick("imagen");
        }}
      >
        <Icon icon="ic:round-image" className="w-5 h-5" />
        <p className="capitalize text-lg px-2 font-medium">fotos</p>
      </div>
      <div
        className={`flex items-center text-main-black hover:text-main-blue hover:bg-gray-100 cursor-pointer px-3 py-1 [&.active]:text-main-blue ${
          currentContent === "video" ? "active" : ""
        }`}
        onClick={() => {
          handleClick("video");
        }}
      >
        <Icon icon="ic:outline-ondemand-video" className="w-5 h-5" />

        <p className="capitalize text-lg px-2 font-medium">videos</p>
      </div>
    </div>
  );
};

export default Dropdown;
