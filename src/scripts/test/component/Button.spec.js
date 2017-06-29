import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../components/impression';

const setup = () => {
    const props = {
        theme: 'primary',
        onClick: jest.fn(),
        outline: false,
        size: 'lg',
        shape: 'pill',
        block: true,
        disabled: true,
    };

    const wrapper = shallow(<Button {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('Button', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('button').exists()).toBe(true);
    });

    it('click', () => {
        wrapper.find('button').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });

    it('theme', () => {
        expect(wrapper.find('.btn-primary').exists()).toBe(true);
    });

    it('size', () => {
        expect(wrapper.find('.btn-lg').exists()).toBe(true);
    });

    it('shape', () => {
        expect(wrapper.find('.btn-pill').exists()).toBe(true);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
