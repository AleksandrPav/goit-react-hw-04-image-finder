import React, { Component } from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import ErrorView from "components/ErrorView/ErrorView";
import UndefinedImgView from "components/UndefinedImg/UndefinedImg";
import { Triangle } from 'react-loader-spinner'
import LoadMoreButton from "components/ButtonLoadMore/Button";





class ImageGallery extends Component{
    KEY_PIXABAY = '28107487-df53024f81d649718d09de179';
    state = {
        searchResult: null,
        error: null,
        status: "idle",
        perPage: 12,
    };

    loadMore = () => {
        this.setState(prevPage => ({
            perPage: prevPage.perPage + 12,
            }));
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSearchValue = prevProps.searchValue;
        const currentSearchValue = this.props.searchValue;
        const prevPage = prevState.perPage
        const currentPage = this.state.perPage;
            if (prevSearchValue !== currentSearchValue || prevPage !== currentPage) {
                this.setState({ status: 'pending'});
                fetch(`https://pixabay.com/api/?key=${this.KEY_PIXABAY}&q=${currentSearchValue}&image_type=photo&orientation=horizontal&per_page=${currentPage}`)
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
                            this.setState({ status: 'success', searchResult});
                        }
                    })
                    .catch(error => this.setState({ error , status: 'error'}));
            } 
    }


    render() {
        const { searchResult, error, status } = this.state;
        const { searchValue } = this.props;

        if (status === "success") {
            return <div className={css.galleryImages}>
            <ul className={css.gallery}>
                {searchResult && searchResult.hits.map(image => (
                <ImageGalleryItem key={image.id} image={image}/>
                ))}
            </ul>
            <LoadMoreButton onClick={this.loadMore}/>  
            </div>;
    
        }
        if (status === "idle") {
            return <div className={css.preLoader}>Будь ласка введіть назву картинки</div>;
        }

        if (status === "pending") {
            return <div className={css.loader}><Triangle
                height="250"
                width="250"
                color="#ff0101"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                visible={true}
            /></div>; 
        }
        if (status === "error") {
            return <ErrorView message={error.message}/>;
        }
        
        if (status === "undefined") {
            return <UndefinedImgView
                searchValue={searchValue}
                
            />;
        }
    }
}

export default ImageGallery;
