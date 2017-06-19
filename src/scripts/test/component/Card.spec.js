import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../../components/impression';

const setup = () => {
    const props = {
        block: true,
        noborder: true,
    };

    const wrapper = shallow(
        <Card {...props}>
            <Card.Header>
                header
            </Card.Header>
            <Card.Block>
                block
            </Card.Block>
            <Card.Footer>
                footer
            </Card.Footer>
        </Card>
    );

    return {
        props,
        wrapper,
    };
};

describe('Card', () => {
    const { wrapper } = setup();

    // 通过 input 是否存在来判断 Todo组件是否被渲染
    it('render', () => {
        expect(wrapper.find('.card').exists()).toBe(true);
        expect(wrapper.find('CardHeader').children().text()).toBe('header');
        expect(wrapper.find('CardBlock').children().text()).toBe('block');
        expect(wrapper.find('CardFooter').children().text()).toBe('footer');
    });

    it('block', () => {
        expect(wrapper.find('.card.card-block').exists()).toBe(true);
    });

    it('noborder', () => {
        expect(wrapper.find('.card.no-border').exists()).toBe(true);
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
