import { getImagen } from '../../base/11-async-await';

describe('Pruebas con el archivo 11-async-await.js', () => {

    test('#01 - Debe de retornar el URL de la imagen', async () => {

        const url = await getImagen();

        expect(typeof url).toBe('string');
    });
});