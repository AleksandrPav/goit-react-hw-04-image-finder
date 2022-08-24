import React from "react";
import css from "./Button.module.css";
import PropTypes from 'prop-types';


const Button = ({ onClick}) => {
  return (
    <button className={css.button} onClick={onClick} type="button">
        <span className={css.button__label}>Завантажити більше</span>
    </button>
  );
}


export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}