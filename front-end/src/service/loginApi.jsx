import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

async function loginApi(email, password) {
  const result = await api
    .post('/login', { email, password })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return result;
}

export default loginApi;
