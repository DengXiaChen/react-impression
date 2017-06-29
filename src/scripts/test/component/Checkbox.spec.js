import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from '../../components/impression';

const setup = () => {
    const props = {
        disabled: false,
        defaultChecked: true,
        checked: true,
        onChange: jest.fn(),
        value: 'yes',
    };

    const wrapper = shallow(
        <Checkbox {...props}>
            football
        </Checkbox>
    );

    return {
        props,
        wrapper,
    };
};

describe('Checkbox', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.checkbox').exists()).toBe(true);
    });

    it('defaultChecked', () => {
        expect(wrapper.find('input').props().checked).toBe(true);
    });

    // it('onChange', () => {
    //     wrapper.find('Checkbox').simulate('click');
    //     expect(wrapper.find('input').props().checked).toBe(false);
    //     expect(props.onChange).toHaveBeenCalled();
    // });

    it('children', () => {
        expect(wrapper.find('.checkbox-label').children().text()).toBe('football');
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
