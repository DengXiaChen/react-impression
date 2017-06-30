import React from 'react';
import { mount, shallow } from 'enzyme';
import { Input } from '../../components/impression';

const setup = () => {
    const props = {
        defaultValue: '2017-7-1',
        showToday: true,
        todayText: 'today',
        firstDayOfWeek: 1,
        minDate: '2017-7-1',
        maxDate: '2018-7-1',
        onSelect: jest.fn(),
        onChange: jest.fn(),
        disabled: false,
    };

    const wrapper = mount(
        <Input type="date" {...props} />
    );

    const wrapper1 = shallow(
        <Input type="date" {...props} />
    );

    return {
        props,
        wrapper,
        wrapper1,
    };
};

describe('CheckboxGroup', () => {
    const { wrapper, wrapper1, props } = setup();

    it('render', () => {
        expect(wrapper.find('.input').exists()).toBe(true);
        // 激活datePicker
        wrapper.find('input').simulate('click');
        expect(wrapper.find('.datepicker').exists()).toBe(true);
        // 自定义today
        expect(wrapper.find('.datepicker-footer a').text()).toBe('today');
        // 从周一开始
        expect(wrapper.find('.datepicker-weekgroup-item').at(0).text()).toBe('一');
        // 存在日期限制
        expect(wrapper.find('.datepicker-daygroup-item-text.disable').exists()).toBe(true);
    });

    it('click', () => {
        wrapper.find('.datepicker-daygroup-item-text').findWhere(n => n.text() === '31').simulate('click');
        expect(props.onChange).toHaveBeenCalledWith('2017-07-31');
    });

    it('ui', () => {
        wrapper.find('input').simulate('click');
        expect(wrapper1).toMatchSnapshot();
    });
});
