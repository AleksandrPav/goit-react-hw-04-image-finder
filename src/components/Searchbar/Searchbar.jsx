import React,{useState} from "react";
import css from "./Searchbar.module.css";
import { toast } from "react-toastify";
import { FcSearch } from "react-icons/fc";
import PropTypes from 'prop-types';



export default function Searchbar({handleSearch}) {
  const [search, setSearch] = useState("");


  const handleValueChange = (e) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      toast.error("Будь ласка, введіть запит!");
      return;
    }
    handleSearch(search);
    setSearch("");
  }


 return (        
      <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
      
      <button type="submit" className={css.button}>
      <span className={css.button__label}><FcSearch className={css.searchbar__icon}/></span>
      </button>

      <input
    className={css.input}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Пошук картинок та фото"
    value={search}
    onChange={handleValueChange}/>
    </form>
    </header>
  );
}
Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string
}


// export default class Searchbar extends Component {

//     state = {
//         search: ""
//     }

//     handleValueChange = (e) => {
//         this.setState({ search: e.target.value.toLowerCase() });
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.search.trim() === "") {
//             toast.error("Будь ласка, введіть запит!");
//             return;
//         }
//         this.props.handleSearch(this.state.search);
//         this.setState({ search: "" });
//     }



    

//     render() {
//         const { search } = this.state;
//         const { handleValueChange, handleSubmit } = this;
//         return (
        
//       <header className={css.searchbar}>
//       <form className={css.form} onSubmit={handleSubmit}>
      
//       <button type="submit" className={css.button}>
//       <span className={css.button__label}><FcSearch className={css.searchbar__icon}/></span>
//       </button>

//       <input
//     className={css.input}
//     type="text"
//     autoComplete="off"
//     autoFocus
//     placeholder="Пошук картинок та фото"
//     value={search}
//     onChange={handleValueChange}/>
//     </form>
//     </header>
//     );
//   }
// }


