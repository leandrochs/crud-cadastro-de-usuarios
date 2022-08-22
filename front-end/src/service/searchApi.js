import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

async function searchApi(search) {
  const { token } = await JSON.parse(localStorage.getItem('token'));
  const config = {
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  };

  const result = await api
    .post('/search', { search }, config)
    .then((res) => res.data)
    .catch((err) => {
      const message = typeof err.response !== 'undefined'
        ? err.response.data.message
        : err.message;
      return { error: message };
    });

  return result;
}

export default searchApi;
