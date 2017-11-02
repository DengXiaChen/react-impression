import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from '../../components/impression';

const setup = () => {
    const props = {
        activePage: 1,
        scope: 3,
        ellipsis: true,
        totalPage: 10,
        onSelect: jest.fn(),
    };

    const wrapper = shallow(<Pagination {...props} />);

    return { props, wrapper };
};

describe('Pagination', () => {
    const { props, wrapper } = setup();

    it('render', () => {
        expect(wrapper.find('.Pagination').exists()).toBe(true);
    });

    it('activePage', () => {
        expect(wrapper.find('.page-item.active').text()).toBe('1');
    });

    it('ellipsis', () => {
        expect(wrapper.find('.fa.fa-ellipsis-h').exists()).toBe(true);
    });

    // it('totalPage', () => {
    //     wrapper.find('.page-item').at(3).simulate('click');
    //     expect(wrapper.find('.page-item.active').text()).toBe('1');
    //     expect(props.onSelect).toHaveBeenCalled();
    //     // expect(wrapper.find('.page-item').at(wrapper.find('.page-item').length - 3).text()).toBe('10');
    // });

    it('ui', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
