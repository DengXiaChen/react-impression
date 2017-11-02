import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from '../../components/impression';

const setup = () => {
    const props = {
        theme: 'danger',
        striped: true,
        value: 66,
        max: 88,
    };

    const wrapper = shallow(<Progress {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('Progress', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.progress').exists()).toBe(true);
    });

    it('theme', () => {
        expect(wrapper.find(`.progress-${props.theme}`).exists()).toBe(true);
    });

    it('striped', () => {
        expect(wrapper.find('.progress-striped').exists()).toBe(true);
    });

    it('value', () => {
        expect(wrapper.find('.progress').prop('value')).toBe(props.value);
    });

    it('max', () => {
        expect(wrapper.find('.progress').prop('max')).toBe(props.max);
    });
});
