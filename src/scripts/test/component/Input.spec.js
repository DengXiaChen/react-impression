import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from '../../components/impression';

const setup = () => {
    const props = {
        type: 'text',
        placeholder: '请输入',
        defaultValue: 'default',
        clearable: true,
        pill: true,
    };

    const wrapper = shallow(<Input {...props} />);
    const wrapper1 = mount(<Input {...props} />);

    return {
        props,
        wrapper,
        wrapper1,
    };
};

describe('Input', () => {
    const { wrapper, wrapper1 } = setup();

    it('render', () => {
        // expect(wrapper1.find('i').exists()).toBe(true);
        expect(wrapper1.find('input').prop('placeholder')).toBe('请输入');
        expect(wrapper1.find('input').props().defaultValue).toBe('default');
        expect(wrapper1.find('input').node.value).toBe('default');
        expect(wrapper1.find('.input-pill').exists()).toBe(true);
    });

    it('input', () => {
        const input = wrapper1.find('input');

        input.simulate('focus');
        input.simulate('keyDown', {
            which: 83,
        });
        expect(wrapper1.find('input').props().defaultValue).toBe('default');
        expect(wrapper1.find('input').node.value).toBe('default');
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
