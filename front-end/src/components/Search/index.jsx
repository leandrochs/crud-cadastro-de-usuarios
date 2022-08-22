import { useState } from 'react';
import mGlass from '../../assets/magnifying-glass.svg';
import refresh from '../../assets/refresh.png';
import searchApi from '../../service/searchApi';
import './style.css';

function Search() {
  const [search, setSearch] = useState('');

  async function onClick(e) {
    e.preventDefault();
    const res = await searchApi(search);

    console.log(res);
  }

  return (
    <div className="search-container">
      <button className="btn-new" type="button">
        <span className="plus">+</span>
        Novo
      </button>
      <div className="img-container">
        <img className="search-img" src={ mGlass } alt="Lupa de busca" />
      </div>
      <input
        className="search-input"
        type="text"
        onChange={ ({ target }) => setSearch(target.value) }
        placeholder="Pesquisar"
      />
      <button className="btn-refresh" type="button" onClick={ onClick }>
        <img className="refresh-img" src={ refresh } alt="Buscar" />
      </button>
    </div>
  );
}

export default Search;
