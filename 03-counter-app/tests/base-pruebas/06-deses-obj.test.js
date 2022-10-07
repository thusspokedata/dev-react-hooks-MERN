import {usContext} from '../../src/base-pruebas/06-deses-obj'

describe('test in 06-deses-obj', () => {
    test('usContext debe retornar un object', () =>{
        const clave ="kilo";
        const edad = 23;
        const user = usContext({clave, edad});
        expect(user).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232}})
    })
})