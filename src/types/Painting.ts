export interface Painting {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: string;
    name: string;
  };
  images: {
    thumbnail: string;
    hero: {
      small: string;
      large: string;
    };
    gallery: string;
  };
}

export interface PaintingProps {
  painting: Painting;
}
