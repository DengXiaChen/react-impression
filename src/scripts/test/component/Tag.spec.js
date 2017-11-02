import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from '../../components/impression';

const setup = () => {
    const props = {
        theme: 'danger',
        shape: 'pill',
        outline: true,
        closable: true,
        onClose: jest.fn(),
    };

    const wrapper = shallow(
        <Tag {...props} />
    );

    return {
        props,
        wrapper,
    };
};

describe('Button', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.tag').exists()).toBe(true);
    });

    it('theme outline', () => {
        expect(wrapper.find('.tag-outline-danger').exists()).toBe(true);
    });

    it('shape', () => {
        expect(wrapper.find('.tag-pill').exists()).toBe(true);
    });

    it('closable', () => {
        expect(wrapper.find('.tag-close').exists()).toBe(true);
    });

    it('onClose', () => {
        wrapper.find('.tag-close').simulate('click');
        expect(props.onClose).toHaveBeenCalled();
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
