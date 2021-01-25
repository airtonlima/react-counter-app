import { getHeroeByIdAsync } from '../../base/09-promesas';

import heroes from '../../data/heroes';

describe('Prueba con el archivo 09-promesas', () => {

    test('#01 - getHeroeByIdAsync debe de retornar un Héroe async', (done) => {

        const id = 1;

        const hero = heroes.find(h => h.id === id)

        getHeroeByIdAsync(id).then(heroe => {

            expect(heroe).toBe(hero);

            done();
        });
    });

    test('#01 - getHeroeByIdAsync debe de obtener un error si el héroe por id no existe', (done) => {

        const id = 10;
        const message = 'No se pudo encontrar el héroe';

        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe(message);
                done();
            });
    });

});