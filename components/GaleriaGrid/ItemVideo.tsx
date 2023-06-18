import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  infoVideo: {
    id: number;
    video_files: Array<{
      file_type: string;
      fps: number;
      height: number;
      id: number;
      link: string;
      quality: string;
      width: number;
    }>;
    video_pictures: Array<{
      id: number;
      nr: number;
      picture: string | null;
    }>;
    user: {
      id: number;
      name: string;
      url: string;
    };
  };
  handleClick: (id: number) => void;
};

const ItemVideo: React.FC<Props> = ({ infoVideo, handleClick }) => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);

  const videoUrl = infoVideo.video_files.find(
    (file) => file.quality === "sd"
  )?.link;

  const previewUrl = infoVideo.video_pictures[0].picture;

  const handleMouseEnter = () => {
    setPlayVideo((prevState) => !prevState);
  };

  return (
    <div
      className="w-full relative mb-5 rounded-md overflow-hidden cursor-pointer"
      onClick={() => {
        handleClick(infoVideo.id);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
    >
      <Image
        src={previewUrl || ""}
        alt={""}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto object-cover"
      />
      {playVideo && (
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto absolute z-10 top-0 left-0"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      <div className="p-5 flex flex-col w-full h-full absolute opacity-0  hover:opacity-100 hover:bg-black/25 z-10 top-0 left-0 transition-all justify-between">
        <div className="interaccion flex items-start justify-end w-full gap-3">
          <span className="p-3 bg-white rounded">
            <Icon
              icon="ic:outline-bookmarks"
              className=" text-gray-600 w-5 h-5"
            />
          </span>
          <span className="p-3 bg-white rounded">
            <Icon
              icon="mdi:cards-heart-outline"
              className=" text-gray-600 w-5 h-5"
            />
          </span>
        </div>
        <p className="nombre text-white capitalize font-medium">
          {infoVideo.user.name}
        </p>
      </div>
    </div>
  );
};

export default ItemVideo;
