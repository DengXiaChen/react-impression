import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../../components/impression';

const setup = () => {
    const navProps = {
        type: 'pill',
        stacked: true,
        activeKey: 'home',
        onSelect: jest.fn(),
    };

    const navItemProps = [{
        eventKey: 'home',
        href: '/home',
    }, {
        eventKey: 'billing',
        disabled: true,
        onClick: jest.fn(),
    }, {
        eventKey: 'active',
        onClick: jest.fn(),
    }];

    const wrapper = shallow(
        <Nav {...navProps}>
            <Nav.Item {...navItemProps[0]}>home</Nav.Item>
            <Nav.Item {...navItemProps[1]}>billing</Nav.Item>
            <Nav.Item {...navItemProps[2]}>active</Nav.Item>
        </Nav>
    );

    return {
        navProps,
        navItemProps,
        wrapper,
    };
};

describe('Nav', () => {
    const { wrapper, navProps, navItemProps } = setup();

    it('render', () => {
        expect(wrapper.find('.nav').exists()).toBe(true);
    });

    it('type', () => {
        expect(wrapper.find(`.nav-${navProps.type}s`).exists()).toBe(true);
    });

    it('stacked', () => {
        expect(wrapper.find('.nav-stacked').exists()).toBe(true);
    });

    it('activeKey', () => {
        expect(wrapper.render().find('.nav-link.active').text()).toBe('home');
    });

    it('disabled', () => {
        expect(wrapper.render().find('.nav-link.disabled').text()).toBe('billing');
    });

    // it('onSelect', () => {
    //     wrapper.find('.nav-item').at(2).simulate('click');
    //     expect(navProps.onSelect).toHaveBeenCalled();
    // });

    // it('onClick', () => {
    //     wrapper.find('.nav-link').at(2).simulate('click');
    //     expect(navItemProps[2].onClick).toHaveBeenCalled();
    // });
});
