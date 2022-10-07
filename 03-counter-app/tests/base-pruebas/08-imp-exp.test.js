import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('pruebas en 08-imp-esp', () => {
  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });
  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });
  test('getHeroesByOwner debe retornar un array con los heroes de DC', () => {
    const owner = 'DC';
    const result = getHeroesByOwner(owner);
    expect(result).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
    expect(result.length).toBe(3);
    console.log(result);
  });
  test('getHeroesByOwner debe retornar un arreglo con los heroes de marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    console.log(heroes);
  });
});
