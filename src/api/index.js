import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://swapi.co/api/'
});

async function fetchPersonagens() {
  const response = await httpClient.get('people/');

  return response.data.results;
}

export { fetchPersonagens };
