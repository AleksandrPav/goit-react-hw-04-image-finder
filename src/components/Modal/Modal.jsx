import React, {Component} from "react";
import css from "./Modal.module.css";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.modalRoot = document.getElementById('modal-root');
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onEscKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscKeyDown);
    }

    handleClickBackdrop = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }


    onEscKeyDown = (e) => {
        if (e.key === 'Escape') {
            this.props.onClose();
        }
    }
    onBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }



    render() {
        const { largeImage , tags } = this.props;
        return createPortal(
            <div className={css.modal} onClick={this.handleClickBackdrop}>
                <div className={css.modal__container}>
                    <img className={css.modal__image} src={largeImage} alt={tags}/>
                </div>
            </div>,
            this.modalRoot
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largePicture: PropTypes.string,
}






