import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      done();
    });
  });
  test('getHeroeByIdAsync debe retornar undefined si heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
      console.log(`this is console ---> ${error}`);
      done();
    });
  });
});
