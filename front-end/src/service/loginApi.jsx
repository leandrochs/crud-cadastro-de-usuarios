import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

async function loginApi(email, password) {
  const result = await api
    .post('/login', { email, password })
    .then((res) => res.data)
    .catch((err) => {
      const message = typeof err.response !== 'undefined'
        ? err.response.data.message
        : err.message;
      return { error: message };
    });

  return result;
}

export default loginApi;
