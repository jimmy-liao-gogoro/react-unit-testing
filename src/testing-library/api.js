import axios from 'axios';

const URL = 'https://www.mocky.io/v2/5185415ba171ea3a00704eed';

export const getServerMessage = () => axios.get(URL);

export default {
  getServerMessage,
};
