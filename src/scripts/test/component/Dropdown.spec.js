import React from 'react';
import { shallow, mount } from 'enzyme';
import { Dropdown, Button } from '../../components/impression';

const setup = () => {
    const props = {
        trigger: 'click',
        active: true,
    };
    const mockFn = jest.fn();

    const temp = (
        <Dropdown {...props}>
            <Dropdown.Trigger>
                <Button theme="primary">Dropdown</Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
                <Dropdown.MenuItem disabled onClick={mockFn}>
                    菜单一
                </Dropdown.MenuItem>
                <Dropdown.MenuItem onClick={mockFn}>
                    菜单二
                </Dropdown.MenuItem>
                <Dropdown.MenuItem onClick={mockFn}>
                    菜单三
                </Dropdown.MenuItem>
                <Dropdown.MenuDivider />
                <Dropdown.MenuItem onClick={mockFn}>
                    菜单四
                </Dropdown.MenuItem>
                <Dropdown.MenuItem onClick={mockFn}>
                    菜单五
                </Dropdown.MenuItem>
                <Dropdown.MenuItem onClick={mockFn}>
                    菜单六
                </Dropdown.MenuItem>
            </Dropdown.Menu>
        </Dropdown>
    );

    const wrapper1 = shallow(temp);
    const wrapper = mount(temp);

    return {
        props,
        mockFn,
        wrapper,
        wrapper1,
    };
};

describe('Dropdown', () => {
    const { wrapper, wrapper1, mockFn } = setup();

    it('render', () => {
        expect(wrapper.find('.dropdown.active').exists()).toBe(true);
        expect(wrapper.find('.dropdown-menu').exists()).toBe(true);
        expect(wrapper.find('.dropdown-item')).toHaveLength(6);
    });

    it('click', () => {
        wrapper.find('.dropdown-item').findWhere(n => n.text() === '菜单三').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('toggle', () => {
        wrapper1.find('.dropdown.active').simulate('click');
        expect(wrapper1.find('button').exists()).toBe(false);
    });

    it('ui', () => {
        expect(wrapper1).toMatchSnapshot();
    });
});
