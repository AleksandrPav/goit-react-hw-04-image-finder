import React, { Component } from "react";
import css from "./Finder.module.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from "components/Searchbar/Searchbar";
import ImageAPI from "components/Service/ImageApi";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";


export default class Finder extends Component {
    state = {
        search: '',
        images: [],
        page: 1,
        error: null,
        status: 'idle',
        largeImage: null,
        tags: null,
        showModal: false,
        showBtn: false,
        loaderActive: false,
    };
   
    async componentDidUpdate(_, prevState) {
    const prevImage = prevState.search;
    const nextImage = this.state.search;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImage !== nextImage || prevPage !== nextPage) {
        try {
            this.setState({ loaderActive: true, });
        
            const imagesData = await ImageAPI.fetchImage(nextImage, nextPage);

            this.setState(prevState => ({
                images: nextPage === 1 ? imagesData.hits : [...prevState.images, ...imagesData.hits],
                status: 'resolved',
                showBtn: true,
            }))
            
            if (imagesData.total === 0) {
                this.setState({
                    status: 'rejected',
                    images: [],
                    showBtn: false
                });
            }
        
            if (imagesData.total > 0 && imagesData.hits.length < 12) {
                this.setState({                
                    showBtn: false,
                });
            }                  
            } catch (error) {
                this.setState({ error, status: 'rejected' })
            } finally {
                this.setState({ loaderActive: false });
            }
        }
    }





    handleSearch = search => {
        this.setState({
            search,
            images: [],
            page: 1,
        });
    }

   toggleModal = (largePicture, tags) => {
    this.setState(({ showModal }) => ({
        showModal: !showModal,
    }));
        this.setState({ largePicture: largePicture, tags:tags });
    };

    render() {
        const { images, status, loaderActive,showBtn, showModal, tags, largePicture } = this.state;
        return (
        <section className={css.finder}>
                <Searchbar handleSearch={this.handleSearch} />
                {status === 'resolved' && (        
                    <ImageGallery images={images} openModal={this.toggleModal}/>
                )}
                {status === 'rejected' && (
                    <div className={css.error}>
                        <h2>Нічого не знайдено</h2>
                        <p>Спробуйте інший запит</p>
                    </div>
                )}
                {loaderActive && (
                    <Loader />
                )}
                {showBtn && (
                    <Button onClick={() => this.setState(prevState => ({ page: prevState.page + 1 }))}/>
                )}
                {showModal && (
                    <Modal
                        onClose={this.toggleModal}
                        largeImage={largePicture}
                        tags={tags}
                    />)}   
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </section>
        );
    }
    


}