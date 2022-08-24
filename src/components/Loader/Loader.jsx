import React from "react";
import css from "./Loader.module.css";
import { ThreeDots } from 'react-loader-spinner'


const Loader = () => {
    return (
        <div className={css.loader}>
    <ThreeDots
    height="80" 
    width="80" 
    radius="9"
    color="#ED213A" 
    ariaLabel="three-dots-loading"
    visible={true} />
        </div>
    );
}

export default Loader;