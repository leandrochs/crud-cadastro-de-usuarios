import mGlass from '../../assets/magnifying-glass.svg';
import refresh from '../../assets/refresh.png';
import './style.css';

function Search() {

    async function onClick(e) {
      e.preventDefault();
      const res = await loginApi(email, password);
  
      if (res.token) {
        history.push('./user');
        localStorage.setItem('token', JSON.stringify(res));
      }
  
      if (res.error) {
        setErrorMessage(res.error);
      }
    
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
        onChange={ ({ target }) => setEmail(target.value) }
        placeholder="Pesquisar"
      />
      <button className="btn-refresh" type="button" onClick={onClick} >
        <img className="refresh-img" src={ refresh } alt="Buscar" />
      </button>
    </div>
  );
}

export default Search;
