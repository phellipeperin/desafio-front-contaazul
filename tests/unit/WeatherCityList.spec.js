import mount from '../util/mount';
import WeatherCityList from '@/components/weather/WeatherCityList.vue';

describe('WeatherCityList', () => {
    const wrapper = mount(WeatherCityList, {
        cityList: [
            'Nuuk/GL',
            'Urubici/BR',
            'Nairobi/KE',
        ],
    });

    it('renders all city columns', () => {
        expect(wrapper.findAll('.col').length).toEqual(3);
    });
});
