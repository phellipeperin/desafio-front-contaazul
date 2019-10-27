import api from './api';

export default {
    name: 'weatherApi',
    mixins: [api],
    data() {
        return {
            weatherBaseApiUrl: '/weather',
            unit: 'metric',
        };
    },
    methods: {
        getCityWeather(city) {
            return this.get(`${this.weatherBaseApiUrl}?q=${city.replace(/ /g, '')}&units=${this.unit}`);
        },
    },
};
