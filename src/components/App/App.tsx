import { useEffect, useState } from "react";
import css from "./App.module.css";

import { fetchImage } from "../../image-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "../../types"



export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSearch = (newQuery:string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImages() {
      try {
        setError(false);
        setIsloading(true);
        const data = await fetchImage(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsloading(false);
      }
    }
    getImages();
  }, [page, query]);

  const openModal = (imageUrl:string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  console.log("selectedImage:", selectedImage);
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {isloading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <ImageModal imageUrl={selectedImage} onClose={closeModal} />
    </div>
  );
}
