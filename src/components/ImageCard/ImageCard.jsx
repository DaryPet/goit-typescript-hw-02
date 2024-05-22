import { useState } from "react";
import css from "./ImageCard.module.css";

export default function ImageCard({ alt_description, urls, onClick }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={css.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => onClick(urls.full)}
    >
      <img className={css.img} src={urls.small} alt={alt_description} />
      {isHover && <p className={css.description}>{alt_description}</p>}
    </div>
  );
}
