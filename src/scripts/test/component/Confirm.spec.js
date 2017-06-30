import React from 'react';
import { shallow } from 'enzyme';
import { Confirm } from '../../components/impression';

const setup = () => {
    const props = {
        onOkClick: jest.fn(),
        onCancelClick: jest.fn(),
        okText: 'ok',
        cancelText: 'cancel',
        type: 'danger',
    };

    const wrapper = shallow(
        <Confirm {...props}>
            Confirm test
        </Confirm>
    );

    return {
        props,
        wrapper,
    };
};

describe('Confirm', () => {
    const { wrapper, props } = setup();

    it('render', () => {
        expect(wrapper.find('.confirm').exists()).toBe(true);
    });

    it('props', () => {
        expect(wrapper.find('.confirm-btn-sure').text()).toBe('ok');
        expect(wrapper.find('.confirm-btn-cancel').text()).toBe('cancel');
        expect(wrapper.find('.text-danger').exists()).toBe(true);
    });

    it('click', () => {
        wrapper.find('.confirm-btn-sure').simulate('click');
        expect(props.onOkClick).toHaveBeenCalled();
        wrapper.find('.confirm-btn-cancel').simulate('click');
        expect(props.onCancelClick).toHaveBeenCalled();
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
