import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en el archivo 08-imp-exp.test.js', () => {
    
    test('#01 - Debe de retornar un héroe por ID', () => {
        
        const id = 1;
        
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);
        
        expect(heroe).toEqual(heroeData);
    });
    
    test('#02 - Debe de retornar undefined si héroe no existe', () => {
        
        const id = 10;
        
        const heroe = getHeroeById(id);
        
        expect(heroe).toEqual(undefined);
    });
    
    test('#03 - Debe de retornar un arreglo con los Héroes de DC', () => {
        
        const owner = 'DC';
        
        const heroes = getHeroesByOwner(owner);
        
        const heroesData = heroes.filter(h => h.owner === owner);
        
        expect(heroes).toEqual(heroesData);
        
        expect(heroes.length).toBeGreaterThan(0);
    });
    
    test('#04 - Debe de retornar un arreglo con los Héroes de Marvel', () => {
        
        const owner = 'Marvel';
        
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(2);
    });
});