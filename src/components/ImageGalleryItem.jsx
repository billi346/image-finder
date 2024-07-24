import React from "react";
const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  handelModal,
}) => {
  return (
    <li onClick={() => handelModal(largeImageURL)} className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
