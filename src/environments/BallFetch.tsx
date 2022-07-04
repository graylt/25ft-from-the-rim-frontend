import axios from 'axios';

// @axios

export const API = axios.create({
    baseURL: 'https://www.balldontlie.io/api/v1/stats'
})

export default API;