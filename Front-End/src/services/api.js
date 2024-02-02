import axios from 'axios'

export const api = axios.create({
    // baseURL: 'https://kenziehub.herokuapp.com/',
    baseURL: 'https://m6-fullstack.onrender.com/',
    // baseURL: 'http://localhost:3000/',

    timeout: 10000,
})