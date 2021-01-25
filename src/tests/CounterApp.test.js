import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach(() => {

        wrapper = shallow( <CounterApp /> );
    });
    test('#01 - Debe mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('#02 - Debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={ 100 } />);

        const valueParrafo = wrapper.find('h2').text().trim();

        expect(valueParrafo).toBe('100');
    });

    test('#03 - Debe incrementar con el botón +1', () => {
        
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });

    test('#04 - Debe incrementar con el botón -1', () => {
        
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    });

    test('#05 - Debe de colocar el valor por defecto con el botón Reset', () => {
        
        const wrapper = shallow( <CounterApp value={ 105 } />);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('105');
    });

});
