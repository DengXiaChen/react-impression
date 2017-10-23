import React from 'react';
import { shallow, mount } from 'enzyme';
import { Flex } from '../../components/impression';

const setup = () => {
    const props = {
        align: 'middle',
        direction: 'column',
    };

    const wrapper = shallow(
        <Flex {...props}>
            <Flex.Item>Flex</Flex.Item>
        </Flex>
    );

    const wrapper1 = mount(
        <Flex {...props}>
            <Flex.Item>Flex</Flex.Item>
        </Flex>
    );

    return {
        props,
        wrapper,
        wrapper1,
    };
};

describe('Flex', () => {
    const { wrapper, wrapper1 } = setup();

    it('render', () => {
        expect(wrapper1.find('.flex.flex-vertical.flex-items-middle').exists()).toBe(true);
        expect(wrapper1.find('.flex-item').exists()).toBe(true);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
