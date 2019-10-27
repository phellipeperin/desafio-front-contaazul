import mount from '../util/mount';
import WeatherCityList from '@/components/weather/WeatherCityList.vue';

describe('WeatherCityList', () => {
    const wrapper = mount(WeatherCityList, {
        cityList: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ],
    });

    it('renders all city columns', () => {
        expect(wrapper.findAll('.city').length).toEqual(3);
    });
});
