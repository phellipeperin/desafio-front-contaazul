// /weather?q=London,uk
import axios from 'axios';

const API_KEY = '3de897ea8ccf60b1642de70cbb627a19';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
});

instance.interceptors.request.use((config) => {
    const newConfig = config;

    if (newConfig.url.indexOf('?') !== -1) newConfig.url += '&';
    else newConfig.url += '?';

    newConfig.url += `APPID=${API_KEY}`;

    return newConfig;
});

export default {
    name: 'api',
    methods: {
        get(url = '') { return instance.get(url); },
    },
};
