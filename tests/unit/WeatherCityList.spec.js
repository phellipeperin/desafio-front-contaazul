import mount from '../util/mount';
import WeatherCityList from '@/components/weather/WeatherCityList.vue';

describe('WeatherCityList', () => {
    const wrapper = mount(WeatherCityList, {
        cityList: [
            { name: 'A City' },
            { name: 'B City' },
            { name: 'C City' },
        ],
    });

    it('renders all city columns', () => {
        expect(wrapper.findAll('.city').length).toEqual(3);
    });
});
