import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en el archivo 05-funciones.js', () => {

    test('#01 - getUser debe de retornar un objeto', () => {

        const test = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(test);
    });

    test('#02 - getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = 'Airton';
        const user = getUsuarioActivo(nombre);
        
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    });

});