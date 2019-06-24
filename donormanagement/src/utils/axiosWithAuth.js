import axios from 'axios';

export const axiosWithAuth = () => {
  const token = axios.get('https://donor-manage-bw.herokuapp.com/oauth/token', credentials);

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'https://donor-manage-bw.herokuapp.com/' 
  });
};