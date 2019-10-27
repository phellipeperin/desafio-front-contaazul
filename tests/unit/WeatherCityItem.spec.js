import mount from '../util/mount';
import WeatherCityItem from '@/components/weather/WeatherCityItem.vue';

// const mockAxios = jest.mock('axios', () => ({
//     get: jest.fn(),
// }));
// mockAxios.interceptors.request.use(config => config);

// jest.mock('axios');

describe('WeatherCityItem', () => { // TODO mock
    const cityName = 'Nuuk, GL';
    const wrapper = mount(WeatherCityItem, { cityName });

    it('renders the city name corretly', () => {
        expect(wrapper.find('.weather-city-header h4').text()).toEqual(cityName);
    });

    // TODO not working, interceptors problem
    // it('loads data and shows temp correctly', (done) => {
    //     wrapper.vm.$nextTick(() => {
    //         expect(wrapper.find('.weather-city-content .temp-value').exists()).toBe(true);
    //         done();
    //     });
    // });

    // TODO render content
    // TODO render footer
    // TODo render extra info when necessary
});
