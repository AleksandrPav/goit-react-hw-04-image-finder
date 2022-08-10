import css from './App.module.css';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';









class App extends Component {
  state = {
    searchValue: '',
  };

 

  handleSearch = searchValue => {
    this.setState({ searchValue });
  }

  render() {
    return (
      <div className={css.app}>
        <Searchbar
          onSearch={this.handleSearch}
        />
        <ImageGallery
          searchValue={this.state.searchValue}
          page={this.state.page}
        />    
       
        <ToastContainer
          autoClose={3000}
        />
      </div>
    );
  }



}


export default App;