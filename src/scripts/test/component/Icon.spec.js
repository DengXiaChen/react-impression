import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../../components/impression';

const setup = () => {
    const props = {
        type: 'arrow',
        size: 'lg',
        right: true,
    };

    const wrapper = shallow(<Icon {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('Icon', () => {
    const { wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('i.fa.fa-arrow.fa-lg.offset-l').exists()).toBe(true);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
