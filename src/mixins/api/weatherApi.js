import api from './api';

export default {
    name: 'weatherApi',
    mixins: [api],
    data() {
        return {
            weatherBaseApiUrl: '/weather',
        };
    },
    methods: {
        getCityWeather(city) {
            return this.get(`${this.weatherBaseApiUrl}?q=${city.replace(/ /g, '')}`);
        },
    },
};
