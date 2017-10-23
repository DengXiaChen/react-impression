import React from 'react';
import { shallow } from 'enzyme';
import { Calendar } from '../../components/impression';

const setup = () => {
    const props = {
        size: 'sm',
        date: '2017-10',
        format: 'YYYY-MM-DD',
        captionFormat: 'YYYY-MM',
        firstDayOfWeek: 1,
        weekdays: ['七', '一', '二', '三', '四', '五', '六'],
        showToolbar: true,
        showHeader: true,
        cellRender: jest.fn(() => (<div>cell content</div>)),
        onCellClick: jest.fn(),
        onDateChange: jest.fn(),
    };
    const wrapper = shallow(<Calendar {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('Calendar', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.calendar').exists()).toBe(true);
    });

    it('size', () => {
        expect(wrapper.find('.calendar-sm').exists()).toBe(true);
    });

    it('captionFormat', () => {
        expect(wrapper.find('.calendar-header-caption').text()).toBe('2017-10');
    });

    it('firstDayOfWeek & weekdays', () => {
        expect(wrapper.find('.calendar-weekgroup-item').at(0).text()).toBe('一');
    });

    it('onCellClick', () => {
        wrapper.find('.calendar-daygroup-item').at(0).simulate('click');
        expect(props.onCellClick).toHaveBeenCalledWith({
            date: '2017-09-25',
            day: 25,
            inMonth: undefined,
            isToday: false,
            month: '09',
            year: '2017',
        });
    });

    // it('onDateChange', () => {
    //     wrapper.find('.btn-default').at(0).simulate('click');
    //     expect(props.onDateChange).toHaveBeenCalled();
    // });

    it('cellRender', () => {
        expect(wrapper.find('.calendar-daygroup-item-body').at(0).text()).toBe('cell content');
    });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
