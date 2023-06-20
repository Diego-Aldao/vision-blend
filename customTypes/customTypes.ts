export type Video = {
  avg_color: string | null;
  height: number;
  id: number;
  duration: number;
  full_res: number | null;
  image: string | null;
  tags: string[] | [];
  user: {
    id: number;
    name: string;
    url: string;
  };
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
  url: string;
  width: number;
};

export type RespuestaVideo = {
  next_page: string;
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: Video[];
};

export type UrlImagenes = {
  landscape: string;
  large: string;
  large2x: string;
  medium: string;
  original: string;
  portrait: string;
  small: string;
  tiny: string;
};

export type Imagen = {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: UrlImagenes;
  url: string;
  width: number;
};

export type RespuestaImagen = {
  next_page: string;
  page: number;
  per_page: number;
  total_results: number;
  photos: Imagen[];
};
