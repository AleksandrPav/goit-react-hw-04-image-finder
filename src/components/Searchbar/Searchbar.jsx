import React,{Component} from "react";
import css from "./Searchbar.module.css";
import {toast} from "react-toastify";


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
      <span className={css.button__label}>Search</span>
    </button>

    <input
    className={css.input}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    value={search}
    onChange={handleValueChange}
    
    />
  </form>
</header>
    );
  }
}