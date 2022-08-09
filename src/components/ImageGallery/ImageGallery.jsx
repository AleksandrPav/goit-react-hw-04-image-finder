import React, { Component } from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import ErrorView from "components/ErrorView/ErrorView";
import UndefinedImgView from "components/UndefinedImg/UndefinedImg";



class ImageGallery extends Component{
    KEY_PIXABAY = '28107487-df53024f81d649718d09de179';
    state = {
        searchResult: null,
        error: null,
        status: "idle",
    };


    componentDidUpdate(prevProps, prevState) {
        const prevSearchValue = prevProps.searchValue;
        const currentSearchValue = this.props.searchValue;
            if (prevSearchValue !== currentSearchValue) {
                this.setState({ status: 'pending'});
                fetch(`https://pixabay.com/api/?key=${this.KEY_PIXABAY}&q=${currentSearchValue}&image_type=photo&orientation=horizontal&per_page=12`)
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        return Promise.reject(new Error(`Картинки з назвою ${currentSearchValue} не знайдено`));
                    })
                    .then(searchResult => {
                        if (searchResult.hits.length === 0) {
                            this.setState({ status: 'undefined' });
                        } else {
                            this.setState({ status: 'success', searchResult });
                        }
                    })
                    .catch(error => this.setState({ error , status: 'error'}));
            } 
    }


    render() {
        const {searchResult, error, status} = this.state;

        if (status === "idle") {
            return <div className={css.loader}>Шукаємо фото</div>;
        }

        if (status === "pending") {
            return <div className={css.loader}>Завантажуємо...</div>;
        }
        if (status === "error") {
            return <ErrorView message={error.message}/>;
        }
        if (status === "success") {
            return <ul className={css.gallery}>
                {searchResult && searchResult.hits.map(image => (
                    <ImageGalleryItem key={image.id} image={image} />
                ))}
            </ul>
        }
        if (status === "undefined") {
            return <UndefinedImgView/>;
        }
    }
}






    //     return (
    //         <>
    //         {error && <div>{ error.message }</div>}
    //         {loading && <div className={css.loader}>Loading...</div>}
    //         {!searchValue && <div className={css.loader}>Search for images</div>}
    //         <ul className={css.gallery}>
    //             {searchResult && searchResult.hits.map(image => (
    //                 <ImageGalleryItem key={image.id} image={image} />
    //             ))}
    //             </ul>
    //             </>
    //     );

    // }


export default ImageGallery;
