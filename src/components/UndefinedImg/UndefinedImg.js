import UndefinedImg from 'images/undefined/undefined.jpg';
import css from './UndefinedImg.module.css';


export default function UndefinedImgView() {
  return (
    <div className={css.undefinedImgItem}>
      <img className={css.undefinedImgImage} src={UndefinedImg} alt="undefined" />
      <p className={css.undefinedImgMessage} >Фото відсутнє</p>
    </div>
  );
}