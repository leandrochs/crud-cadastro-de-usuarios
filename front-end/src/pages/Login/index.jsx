import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginApi from '../../service/loginApi';
import './style.css';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

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
    <main className="main-login">
      <form className="login-form">
        <h4>Por favor faça login.</h4>
        <input
          className="login-input"
          type="email"
          onChange={ ({ target }) => {
            setEmail(target.value);
            setErrorMessage('');
          } }
          placeholder="Digite o email"
        />
        <input
          className="login-input"
          type="password"
          onChange={ ({ target }) => {
            setPassword(target.value);
            setErrorMessage('');
          } }
          placeholder="Digite a senha"
        />
        <div className="error-message">{errorMessage}</div>
        <button
          className="login-button"
          type="submit"
          onClick={ onClick }
          disabled={ !(email && password) }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
