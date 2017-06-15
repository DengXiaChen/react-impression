import React from 'react';
import { mount } from 'enzyme';
import { Attention } from '../../components/impression';

const setup = () => {
    const props = {
        theme: 'danger',
        closeable: true,
    };

    const wrapper = mount(
        <Attention {...props}>
            <Attention.Link href="#">click here</Attention.Link>
        </Attention>
    );

    return {
        props,
        wrapper,
    };
};

describe('Attention', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.attention').exists()).toBe(true);
    });

    it('theme', () => {
        expect(wrapper.find(`.attention-${props.theme}`).exists()).toBe(true);
    });

    it('closeable', () => {
        expect(wrapper.find('button.close').exists()).toBe(true);
    });

    it('link', () => {
        console.log(wrapper.find('.attention-link').prop('href'));
        expect(wrapper.find('.attention-link').prop('href')).toBe('#');
    });
});
