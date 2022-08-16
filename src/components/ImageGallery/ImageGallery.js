import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';


export default function ImageGallery({images, openModal}) {
    return (
        <ul className={css.ImageGallery}>
             {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                onClick={openModal}
                />
            ))}
        </ul>
    );
}


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired
}