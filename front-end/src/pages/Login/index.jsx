import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginApi from '../../service/loginApi';
import './style.css';

function Login() {
  const [errorMessage] = useState('ssss');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function onClick(e) {
    e.preventDefault();
    const token = await loginApi(email, password);
    localStorage.setItem('token', JSON.stringify(token));
    if (token) history.push('./user');
  }

  return (
    <main>
      <form>
        <h4>Por favor faça login.</h4>
        <input
          type="email"
          onChange={ ({ target }) => setEmail(target.value) }
          placeholder="Digite o email"
        />
        <input
          type="email"
          onChange={ ({ target }) => setPassword(target.value) }
          placeholder="Digite a senha"
        />
        <div className="error-message">{errorMessage}</div>
        <button type="submit" onClick={ onClick } disabled={ !(email && password) }>
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
