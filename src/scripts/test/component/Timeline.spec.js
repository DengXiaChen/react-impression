import React from 'react';
import { mount, shallow } from 'enzyme';
import { Timeline, Icon } from '../../components/impression';

const setup = () => {
    const temp = (
        <Timeline>
            <Timeline.Item
                dot={<Icon type="fa-play-circle-o" />}>
                1999 疯狂世界
            </Timeline.Item>
            <Timeline.Item unreachable>2000 爱情万岁</Timeline.Item>
            <Timeline.Item>2001 候鸟</Timeline.Item>
            <Timeline.Item>2002 摇滚本事</Timeline.Item>
        </Timeline>
    );
    const wrapper = mount(temp);

    const wrapper1 = shallow(temp);

    return {
        wrapper,
        wrapper1,
    };
};

describe('Timeline', () => {
    const { wrapper, wrapper1 } = setup();

    it('render', () => {
        expect(wrapper.find('.timeline').exists()).toBe(true);
    });

    it('item', () => {
        expect(wrapper.find('.timeline-item')).toHaveLength(4);
    });

    it('dot', () => {
        expect(wrapper.find('Icon').exists()).toBe(true);
    });

    it('unreachable', () => {
        expect(wrapper.find('.timeline-item-unreachable').text()).toBe('2000 爱情万岁');
    });

    it('ui', () => {
        expect(wrapper1).toMatchSnapshot();
    });
});
