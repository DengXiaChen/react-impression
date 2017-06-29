import React from 'react';
import { mount, shallow } from 'enzyme';
import { Collapse } from '../../components/impression';

const setup = () => {
    const props = {
        active: true,
    };

    const wrapper = mount(
        <Collapse {...props}>
            <Collapse.Title>
                Title
            </Collapse.Title>
            <Collapse.Body>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Collapse.Body>
        </Collapse>
    );

    const wrapper1 = shallow(
        <Collapse {...props}>
            <Collapse.Title>
                Title
            </Collapse.Title>
            <Collapse.Body>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Collapse.Body>
        </Collapse>
    );

    return {
        wrapper,
        props,
        wrapper1,
    };
};

describe('Collapse', () => {
    const { wrapper1, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.collapse').exists()).toBe(true);
        expect(wrapper.find('.collapse-title').exists()).toBe(true);
        expect(wrapper.find('.collapse-body').exists()).toBe(true);
    });

    it('active', () => {
        expect(wrapper.find('.collapse .active').exists()).toBe(true);
        wrapper.find('.collapse-title').simulate('click');
        expect(wrapper.find('.collapse .active').exists()).toBe(false);
    });

    it('ui', () => {
        expect(wrapper1).toMatchSnapshot();
    });
});
