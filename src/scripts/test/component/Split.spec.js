import React from 'react';
import { shallow } from 'enzyme';
import { Split } from '../../components/impression';

const setup = () => {
    const wrapper = shallow(<Split />);

    return {
        wrapper,
    };
};

describe('Split', () => {
    const { wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.split').text()).toBe('|');
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
