import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('tests in 07-deses-arr', () => {
  test('debe retornar un string y un numero', () => {
    const [letter, numbers] = retornaArreglo();
    expect(typeof letter).toBe('string');
    expect(typeof numbers).toBe('number');
  });
});
