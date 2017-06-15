import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumb } from '../../components/impression';

const setup = () => {
    const props = {
        separator: 'arrow',
    };

    const wrapper = shallow(
        <Breadcrumb {...props}>
            <a href="javascript:void(0);">首页</a>
            <a href="javascript:void(0);">财务管理</a>
            <span>收入</span>
        </Breadcrumb>
    );

    return {
        props,
        wrapper,
    };
};

describe('Breadcrumb', () => {
    const { wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.breadcrumb').exists()).toBe(true);
    });

    it('breadcrumb item', () => {
        expect(wrapper.find('.breadcrumb-item')).toHaveLength(3);
        // expect(wrapper.find('.breadcrumb-item::before')).toBe('>');
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
