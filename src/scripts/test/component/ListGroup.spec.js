import React from 'react';
import { shallow } from 'enzyme';
import { ListGroup } from '../../components/impression';

const setup = () => {
    const props = [{
        href: '/listGroup',
        disabled: true,
    }, {
        active: true,
    }];

    const wrapper = shallow(
        <ListGroup>
            <ListGroup.Item {...props[0]}>ListGroup1</ListGroup.Item>
            <ListGroup.Item {...props[1]}>ListGroup2</ListGroup.Item>
        </ListGroup>
    );

    return {
        props,
        wrapper,
    };
};

describe('ListGroup', () => {
    const { wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('ul.list-group').exists()).toBe(true);
    });

    it('href', () => {
        expect(wrapper.render().find('a.list-group-item').prop('href')).toBe('/listGroup');
    });

    it('disabled', () => {
        expect(wrapper.render().find('.list-group-item.disabled')).toHaveLength(1);
    });

    it('header', () => {
        expect(wrapper.render().find('.list-group-item.active')).toHaveLength(1);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
