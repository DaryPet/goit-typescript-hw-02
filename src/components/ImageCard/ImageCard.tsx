import { useState } from "react";
import css from "./ImageCard.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  alt_description: string,
  urls: {
    small: string,
    full: string
  }
  onClick: (url: string)=> void
}


const ImageCard: React.FC<ImageCardProps> = ({ alt_description, urls, onClick }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  
  return (
    <div
      className={css.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={ ()=> onClick(urls.full)}
    >
      <img className={css.img} src={urls.small} alt={alt_description} />
      {isHover && <p className={css.description}>{alt_description}</p>}
    </div>
  );
}
export default ImageCard;