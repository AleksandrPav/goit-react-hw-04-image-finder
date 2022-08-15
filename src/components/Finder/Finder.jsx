import React, { Component } from "react";
import css from "./Finder.module.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from "components/Searchbar/Searchbar";


export default class Finder extends Component {
    state = {
        search: "",
        results: [],
        loading: false,
        error: null,
        page: 1,
        showButton: true,
        showMore: false,
        status: "idle",
    };

    handleSearch = (search) => {
        this.setState({ search });
    }


    render() {
        return (
        <section className={css.finder}>
            <Searchbar
                    handleSearch={this.handleSearch}
                />
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