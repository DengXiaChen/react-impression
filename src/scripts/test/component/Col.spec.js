import React from 'react';
import { shallow, mount } from 'enzyme';
import { Row, Col } from '../../components/impression';

const setup = () => {
    const props = {
    };

    const wrapper = shallow(
        <Row>
            <Col>4</Col>
            <Col>4</Col>
            <Col>4</Col>
        </Row>
    );

    const wrapper1 = mount(
        <Row>
            <Col>4</Col>
            <Col>4</Col>
            <Col>4</Col>
        </Row>
    );

    return {
        props,
        wrapper,
        wrapper1,
    };
};

describe('Row Col', () => {
    const { wrapper1, wrapper } = setup();

    it('render', () => {
        expect(wrapper1.find('.row').exists()).toBe(true);
        expect(wrapper1.find('.col-xs-4')).toHaveLength(3);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
