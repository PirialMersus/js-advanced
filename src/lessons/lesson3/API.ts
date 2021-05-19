import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=8a7a6e4b';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
        const query = `${key}&s=${title}&type=${type}`
        return axiosInstance.get(query)
    }
};


export default API;
