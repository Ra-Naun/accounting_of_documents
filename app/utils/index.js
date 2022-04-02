import axios from 'axios';

export const fetcher = async url => {
  const response = await axios.get(url);
  console.log('!| response.data: ', response.data);
  return response;
};
