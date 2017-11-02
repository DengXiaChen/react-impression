import React from 'react';
import { shallow, mount } from 'enzyme';
import { Sidebar } from '../../components/impression';

const setup = () => {
    const temp = (
        <Sidebar>
            <Sidebar.Header>
                <div>Sidebar header</div>
            </Sidebar.Header>
            <Sidebar.Body>
                <div>Sidebar body</div>
            </Sidebar.Body>
            <Sidebar.Footer className="test">
                <div>Sidebar footer</div>
            </Sidebar.Footer>
        </Sidebar>
    );
    const wrapper = mount(temp);
    const wrapper1 = shallow(temp);

    return {
        wrapper,
        wrapper1,
    };
};

describe('Sidebar', () => {
    const { wrapper, wrapper1 } = setup();

    it('render', () => {
        expect(wrapper.find('.sidebar').exists()).toBe(true);
        expect(wrapper.find('.sidebar-header').text()).toBe('Sidebar header');
        expect(wrapper.find('.sidebar-body').text()).toBe('Sidebar body');
        expect(wrapper.find('.sidebar-footer').text()).toBe('Sidebar footer');
    });

    it('ui', () => {
        expect(wrapper1).toMatchSnapshot();
    });
});
