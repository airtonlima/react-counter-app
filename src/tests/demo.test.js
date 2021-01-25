
describe('Pruebas en el archivo demo.test.js', () => {

    test('#01 - Esta es mi primera prueba - Debe ser TRUE', () => {
    
       const mensaje  = 'Hola Mundo';
    
       expect(mensaje).toBe('Hola Mundo');
    });
});
