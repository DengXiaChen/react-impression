import React from 'react';
import { shallow, mount } from 'enzyme';
import { InlineSelect } from '../../components/impression';

const setup = () => {
    const props = {
        defaultValue: '2',
        onChange: jest.fn(),
    };

    const temp = (
        <InlineSelect {...props}>
            <InlineSelect.Option value="1">北京</InlineSelect.Option>
            <InlineSelect.Option value="2">上海</InlineSelect.Option>
            <InlineSelect.Option value="3">南京</InlineSelect.Option>
        </InlineSelect>
    );

    const wrapper = shallow(temp);
    const wrapper1 = mount(temp);

    return {
        props,
        wrapper,
        wrapper1,
    };
};

describe('InlineSelect', () => {
    const { props, wrapper, wrapper1 } = setup();

    it('render', () => {
        expect(wrapper1.find('.inline-select').exists()).toBe(true);
        expect(wrapper1.find('.inline-select-option')).toHaveLength(3);
        expect(wrapper1.find('.inline-select-option.active').text()).toBe('上海');
    });

    it('change', () => {
        wrapper1.find('.inline-select-option').at(2).simulate('click');
        expect(props.onChange).toHaveBeenCalledWith('3', '南京', 2);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
