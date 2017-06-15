import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '../../components/impression';

const setup = () => {
    const props = {
        children: 'alert test',
        type: 'danger',
        onClick: jest.fn(),
        btnText: '确认按钮',
    };

    const wrapper = shallow(<Alert {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('Todo', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.alert').exists()).toBe(true);
    });

    it('type', () => {
        expect(wrapper.find('i.text-danger').exists()).toBe(true);
    });

    it('btnText', () => {
        expect(wrapper.find('.alert-footer').children().text()).toBe('确认按钮');
    });

    it('children', () => {
        expect(wrapper.find('.alert-body').children().text()).toBe('alert test');
    });

    it('click', () => {
        wrapper.find('.alert-footer').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
