import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('proebas en 11-async-await', () => {
  test('test debe retornar url de la imagen', () => {
    const url = getImagen();
    console.log(url);
    expect(typeof url).toBe('object');
    console.log(url);
  });
});
