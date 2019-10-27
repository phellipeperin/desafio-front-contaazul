import cachedStorage from './cachedStorage';

const CITY_PREFIX = 'city_';

export default {
    name: 'weatherCachedStorage',
    mixins: [cachedStorage],
    methods: {
        saveCityData(cityName, data) {
            this.saveCachedData(this.convertCityNameToCacheData(cityName), data);
        },
        loadCityData(cityName) {
            return this.loadCachedData(this.convertCityNameToCacheData(cityName));
        },
        convertCityNameToCacheData(cityName) {
            return `${CITY_PREFIX}${cityName.substring(0, cityName.indexOf(',')).toLowerCase()}`;
        },
    },
};
