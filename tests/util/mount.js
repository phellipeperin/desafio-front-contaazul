import { shallowMount } from '@vue/test-utils';

export default function (component, props = {}) {
    return shallowMount(component, {
        propsData: props,
    });
};
