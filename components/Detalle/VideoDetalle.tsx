import { Video } from "@customTypes/customTypes";
import Image from "next/image";
import React from "react";

type Props = {
  urlImagen: string | null;
  videos: Video["video_files"];
};

const VideoDetalle: React.FC<Props> = ({ urlImagen, videos }) => {
  const currentVideo = videos.find(
    (video) => video.height === 720 || video.width === 720
  ); //el video hd de menor tamaño

  return (
    <div className="max-w-4xl mx-auto px-3">
      <div
        className={`w-full my-5 mx-auto  relative  ${
          currentVideo?.height === 720 ? "sm:max-w-4xl" : "sm:max-w-xl"
        }`}
      >
        <Image
          src={urlImagen || ""}
          alt={""}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-cover"
        />
        <video
          autoPlay
          loop
          muted
          controls
          className="w-full h-full absolute z-10 top-0 left-0 object-cover"
        >
          <source src={currentVideo?.link} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoDetalle;
