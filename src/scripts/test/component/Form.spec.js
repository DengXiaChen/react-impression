import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form } from '../../components/impression';

const setup = () => {
    const props = {
        type: 'horizontal',
    };

    const wrapper = shallow(
        <Form {...props}>
            <Form.Group col={6}>Form</Form.Group>
            <Form.Group col={6}>Form</Form.Group>
        </Form>
    );

    const wrapper1 = mount(
        <Form {...props}>
            <Form.Group col={6}>Form</Form.Group>
            <Form.Group col={6}>Form</Form.Group>
        </Form>
    );

    return {
        props,
        wrapper,
        wrapper1,
    };
};

describe('Form', () => {
    const { wrapper, wrapper1 } = setup();

    it('render', () => {
        expect(wrapper1.find('.form-horizontal').exists()).toBe(true);
        expect(wrapper1.find('.form-group')).toHaveLength(2);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
