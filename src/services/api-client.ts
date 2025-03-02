import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4163209685b94c8badfd66be3c8491c7',
  },
});
