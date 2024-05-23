import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps{
  items: Image[],
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC <ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.container}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard
              urls={item.urls}
              alt_description={item.alt_description}
              onClick={onImageClick}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default ImageGallery;