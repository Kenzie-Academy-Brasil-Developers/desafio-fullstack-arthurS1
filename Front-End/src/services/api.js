import axios from 'axios'

export const api = axios.create({
    // baseURL: 'https://kenziehub.herokuapp.com/',
    baseURL: 'https://m6-fullstack.onrender.com/',
    timeout: 10000,
})