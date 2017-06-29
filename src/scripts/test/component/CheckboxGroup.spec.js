import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox, CheckboxGroup } from '../../components/impression';

const setup = () => {
    const props = {
        defaultValue: ['basketball', 'football'],
        onChange: jest.fn(),
    };

    const wrapper = shallow(
        <CheckboxGroup {...props}>
            <Checkbox>basketball</Checkbox>
            <Checkbox>football</Checkbox>
            <Checkbox>volleyball</Checkbox>
        </CheckboxGroup>
    );

    return {
        props,
        wrapper,
    };
};

describe('CheckboxGroup', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.checkbox-inline').exists()).toBe(true);
        expect(wrapper.find('Checkbox')).toHaveLength(3);
    });

    it('defaultValue', () => {
        expect(wrapper.find('Checkbox').at(0).props().checked).toBe(true);
        expect(wrapper.find('Checkbox').at(1).props().checked).toBe(true);
        expect(wrapper.find('Checkbox').at(2).props().checked).toBe(false);
    });

    it('onChange', () => {
        wrapper.find('Checkbox').at(2).simulate('click');
        // TODO FIX
        // expect(props.onChange).toHaveBeenCalled();
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
