import React from "react";
import css from "./Button.module.css";

function LoadMoreButton(props) {
  return (
    <button className={css.button__text} onClick={props.onClick}>
      Load more
    </button>
  );
}

export default LoadMoreButton;
