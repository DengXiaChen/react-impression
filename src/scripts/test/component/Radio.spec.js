import React from 'react';
import { mount } from 'enzyme';
import { Radio, RadioGroup } from '../../components/impression';

const setup = () => {
    const props = {
        defaultValue: 'male',
        direction: 'column',
        onChange: jest.fn(),
    };

    const wrapper = mount(
        <RadioGroup {...props}>
            <Radio value={'male'}>male</Radio>
            <Radio value={'female'}>female</Radio>
        </RadioGroup>
    );

    return {
        props,
        wrapper,
    };
};

describe('Radio', () => {
    const { props, wrapper } = setup();

    it('render direction', () => {
        expect(wrapper.find('.radio-vertical').exists()).toBe(true);
    });

    it('defaultValue', () => {
        expect(wrapper.state().value).toBe('male');
    });

    it('onChange', () => {
        wrapper.find('.radio-addon').at(1).simulate('click');
        // expect(props.onChange).toHaveBeenCalled();
        // expect(wrapper.state().value).toBe('female');
    });
});
