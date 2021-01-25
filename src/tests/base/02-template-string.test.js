import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';


describe('Pruebas en el archivo 02-template-string.test.js', () => {

    test(`#01 - getSaludo debe de retornar 'Hola Airton'`, () => {

        const nombre = 'Airton';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${ nombre }`);
    });

    test(`#02 - getSaludo debe de retornar 'Hola Carlos' si no hay argumento nombre`, () => {

        const saludo = getSaludo();

        expect(saludo).toBe(`Hola Carlos`);
    });

});