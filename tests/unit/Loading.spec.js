import mount from '../util/mount';
import Loading from '@/components/loading/Loading.vue';

describe('Loading', () => {
    const wrapperVisible = mount(Loading, { condition: true });
    const wrapperInvisible = mount(Loading, { condition: false });

    it('shows loading img on true condition', () => {
        expect(wrapperVisible.find('img').exists()).toBe(true);
    });

    it('hides loading img on false condition', () => {
        expect(wrapperInvisible.find('img').exists()).toEqual(false);
    });
});
