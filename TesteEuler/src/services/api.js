import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apiteste.escolaemmovimento.com.br/api/v1/',
});

export default api;
