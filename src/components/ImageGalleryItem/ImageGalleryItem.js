import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ id, webformatURL, largeImageURL, tags, onClick }) {
    return (
        <li className={css.ImageGalleryItem} key={id}>
            <img
                className={css.ImageGalleryItemImage}
                src={webformatURL}
                alt={tags}
                onClick={() => onClick(largeImageURL, tags)}
            />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired

}