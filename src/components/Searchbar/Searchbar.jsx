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