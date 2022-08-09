import errorImage from 'images/Error/error.jpg';
import css from './ErrorView.module.css';

export default function ErrorView({message}) {
  return (
    <div className={css.errorItem}>
      <img className={css.errorImage} src={errorImage} alt="error" />
      <p className={css.errorMessage} >{message}</p>
    </div>
  );
}