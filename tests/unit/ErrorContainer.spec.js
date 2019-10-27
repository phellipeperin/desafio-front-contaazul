import mount from '../util/mount';
import ErrorContainer from '@/components/error/ErrorContainer.vue';

describe('ErrorContainer', () => {
    const wrapper = mount(ErrorContainer);
    const button = wrapper.find('button');

    it('has a button', () => {
        expect(button.exists()).toBe(true);
    });

    it('button is labeled "Try Again"', () => {
        expect(button.text()).toEqual('Try Again');
    });

    button.trigger('click');
    it('emits event reload on click', () => {
        expect(wrapper.emitted('reload')).toHaveLength(1);
    });
});
