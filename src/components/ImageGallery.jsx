import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, handelModal }) => {
  const imageElem = images?.map((image) => (
    <ImageGalleryItem key={image.id} {...image} handelModal={handelModal} />
  ));

  return (
    <section>
      <ul className="ImageGallery">{imageElem}</ul>
    </section>
  );
};

export default ImageGallery;
