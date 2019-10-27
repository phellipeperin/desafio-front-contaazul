import mount from '../util/mount';
import WeatherCityItem from '@/components/weather/WeatherCityItem.vue';

describe('WeatherCityItem', () => { // TODO mock
    const cityName = 'Nuuk, GL';
    const wrapper = mount(WeatherCityItem, { cityName });

    it('renders the city name corretly', () => {
        expect(wrapper.find('.weather-city-header h4').text()).toEqual(cityName);
    });

    // TODO render content
    // TODO render footer
});
