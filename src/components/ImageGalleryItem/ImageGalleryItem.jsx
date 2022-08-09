import React from "react";
import css from "./ImageGalleryItem.module.css";


function ImageGalleryItem(props) {
    const { image } = props;
  return (
    <li className={css.gallery__item}>
      <img
        className={css.gallery__image}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
}

export default ImageGalleryItem;