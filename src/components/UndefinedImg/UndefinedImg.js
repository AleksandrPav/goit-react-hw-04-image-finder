import UndefinedImg from 'images/undefined/undefined.jpg';
import css from './UndefinedImg.module.css';


export default function UndefinedImgView({searchValue}) {
  return (
    <div className={css.container}>
      <p className={css.message} >Картинка з назвою: {searchValue} відсутня</p>
      <img className={css.image} src={UndefinedImg} alt="undefined" />
    </div>
  );
}