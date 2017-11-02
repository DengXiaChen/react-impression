import React from 'react';
import { mount } from 'enzyme';
import { Popover } from '../../components/impression';

const setup = () => {
    const props = {
        position: 'left',
        title: 'Popover title',
        content: 'Popover content',
    };

    const wrapper = mount(
        <Popover {...props}>
            <div>Popover test</div>
        </Popover>
    );

    return {
        props,
        wrapper,
    };
};

describe('Popover', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        wrapper.find('div').simulate('mouseover');
        expect(wrapper.find('.popover').exists()).toBe(false);
    });
});
