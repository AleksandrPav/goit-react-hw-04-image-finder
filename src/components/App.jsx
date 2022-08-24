<<<<<<< HEAD
import css from './App.module.css';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======

import Finder from "../components/Finder/Finder";
import css from "./App.module.css";
>>>>>>> 09d6505d4230b9b7a6e3fcec575abe59bdcdde0e




<<<<<<< HEAD





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
=======
export const App = () => {
  return (
    <div className={css.App} >
      <Finder
      />
    </div>
  );
};
>>>>>>> 09d6505d4230b9b7a6e3fcec575abe59bdcdde0e
