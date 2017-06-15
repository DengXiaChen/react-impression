import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from '../../components/impression';

const setup = () => {
    const props = {
        theme: 'primary',
        content: 'badge test',
        type: 'legend',
        size: 'lg',
    };

    const wrapper = shallow(<Badge {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('Badge', () => {
    const { props, wrapper } = setup();

    // 通过 input 是否存在来判断 Todo组件是否被渲染
    it('render', () => {
        expect(wrapper.find('.badge').exists()).toBe(true);
    });

    it('theme', () => {
        expect(wrapper.find('.bg-primary').exists()).toBe(true);
    });

    it('size', () => {
        expect(wrapper.find('.badge-addon-lg').exists()).toBe(true);
    });

    it('type', () => {
        expect(wrapper.find('.badge-legend').exists()).toBe(true);
    });

    it('content', () => {
        expect(wrapper.find('.badge').text()).toBe(props.content);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
