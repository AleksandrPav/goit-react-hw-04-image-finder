<<<<<<< HEAD
import React, {Component } from "react";
import css from "./Searchbar.module.css";
import { FcSearch } from "react-icons/fc";
import {toast} from "react-toastify";





class Searchbar extends Component {

    state = {
        searchValue: ""
    }

    handleValueChange = (event) => {
        event.preventDefault();
        this.setState({
            searchValue: event.target.value.toLowerCase()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.searchValue.trim() === "") {
            toast.error("Будь ласка, введіть запит!");
            return;
        } 
            this.props.onSearch(this.state.searchValue);
            this.setState({ searchValue: "" });
    }


    render() {
        return (
    <header className={css.searchbar}>
    <form className={css.form} onSubmit={this.handleSubmit}>
    
    <button type="submit" className={css.button}>
    <span className={css.button__label}><FcSearch className={css.searchbar__icon}/></span>
    </button>
    
    <input
    className={css.searchbar__input}
    type="text"
    name="searchValue"
    value={this.state.searchValue}
    onChange={this.handleValueChange}
    autoComplete="off"
    autoFocus
    placeholder="Пошук картинок та фото"/>  
    </form>
    </header>
        );
}
}

export default Searchbar;
=======
import React,{Component} from "react";
import css from "./Searchbar.module.css";
import { toast } from "react-toastify";
import { FcSearch } from "react-icons/fc";
import PropTypes from 'prop-types';


export default class Searchbar extends Component {

    state = {
        search: ""
    }

    handleValueChange = (e) => {
        this.setState({ search: e.target.value.toLowerCase() });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.search.trim() === "") {
            toast.error("Будь ласка, введіть запит!");
            return;
        }
        this.props.handleSearch(this.state.search);
        this.setState({ search: "" });
    }



    

    render() {
        const { search } = this.state;
        const { handleValueChange, handleSubmit } = this;
        return (
        
      <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
      
      <button type="submit" className={css.button}>
      <span className={css.button__label}><FcSearch className={css.searchbar__icon}/></span>
      </button>

      <input
    className={css.input}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Пошук картинок та фото"
    value={search}
    onChange={handleValueChange}/>
    </form>
    </header>
    );
  }
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string
}
>>>>>>> 09d6505d4230b9b7a6e3fcec575abe59bdcdde0e
