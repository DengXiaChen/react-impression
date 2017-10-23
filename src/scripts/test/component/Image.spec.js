import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../../components/impression';

const setup = () => {
    const props = {
        fluid: true,
        rounded: true,
        circle: true,
        thumbnail: true,
    };

    const wrapper = shallow(<Image {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('Button', () => {
    const { wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('img').exists()).toBe(true);
    });

    it('fluid', () => {
        expect(wrapper.find('.img-fluid').exists()).toBe(true);
    });

    it('rounded', () => {
        expect(wrapper.find('.img-rounded').exists()).toBe(true);
    });

    it('circle', () => {
        expect(wrapper.find('.img-circle').exists()).toBe(true);
    });

    it('thumbnail', () => {
        expect(wrapper.find('.img-thumbnail').exists()).toBe(true);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
