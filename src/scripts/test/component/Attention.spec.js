import React from 'react';
import { shallow } from 'enzyme';
import { Attention } from '../../components/impression';

const setup = () => {
    const props = {
        theme: 'danger',
        closeable: true,
    };

    const wrapper = shallow(
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
        expect(wrapper.render().find('.attention-link').prop('href')).toBe('#');
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
