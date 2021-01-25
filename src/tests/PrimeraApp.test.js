import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('Debe de mostrar el mensaje Hola, soy Goku', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const wrapper = render(<PrimeraApp saludo={ saludo } />);
    //     expect(wrapper.getByText(saludo)).toBeInTheDocument();
    // });

    test('#01 - Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect(wrapper).toMatchSnapshot();
    });

    test('#02 - Debe mostrar el subtitulo enviado via props', () => {

        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subTitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subTitulo );
    });
});