import React from 'react';
import { shallow } from 'enzyme';
import { ButtonGroup, Button } from '../../components/impression';

const setup = () => {
    const props = {
        theme: 'secondary',
        size: 'lg',
        activeKey: 'right',
        onSelect: jest.fn(),
    };

    const wrapper = shallow(
        <ButtonGroup {...props}>
            <Button eventKey="left">Left</Button>
            <Button eventKey="middle">Middle</Button>
            <Button eventKey="right">Right</Button>
        </ButtonGroup>
    );

    return {
        props,
        wrapper,
    };
};

describe('ButtonGroup', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.btn-group').exists()).toBe(true);
    });

    it('size', () => {
        expect(wrapper.find('.btn-group-lg').exists()).toBe(true);
    });

    it('theme', () => {
        expect(wrapper.find('Button')).toHaveLength(3);
    });

    it('activeKey', () => {
        expect(wrapper.state().activeKey).toBe('right');
    });

    it('onSelect', () => {
        wrapper.find('Button').at(1).simulate('click');
        expect(props.onSelect).toHaveBeenCalledWith('middle', undefined);
        expect(wrapper.state().activeKey).toBe('middle');
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
