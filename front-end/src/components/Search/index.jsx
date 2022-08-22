import { useContext, useState } from 'react';
import Context from '../../context/Context';
import mGlass from '../../assets/magnifying-glass.svg';
import refresh from '../../assets/refresh.png';
import searchApi from '../../service/searchApi';
import './style.css';

function Search() {
  const { setUsers } = useContext(Context);
  const [search, setSearch] = useState('');

  async function onClick(e) {
    e.preventDefault();
    const res = await searchApi(search);
    if (res) {
      setUsers(res);
    }
  }

  return (
    <form className="search-container">
      <div className="img-container">
        <img className="search-img" src={ mGlass } alt="Lupa de busca" />
      </div>
      <input
        className="search-input"
        type="text"
        onChange={ ({ target }) => setSearch(target.value) }
        placeholder="Pesquisar"
      />
      <button className="btn-refresh" type="submit" onClick={ onClick }>
        <img className="refresh-img" src={ refresh } alt="Buscar" />
      </button>
    </form>
  );
}

export default Search;
