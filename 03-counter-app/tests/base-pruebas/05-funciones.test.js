import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getuser debe retornar un object', () => {
        const testUser ={  uid: 'ABC123',
        username: 'El_Papi1502'}
    
    const user = getUser();
    expect(testUser).toEqual(user)

})
})

describe('Pruebas en 05-funciones', () => {
    test('getUsuarioActivo debe retornar un object convinado con getUser', () =>{
        const name ="kilo"
        const user = getUsuarioActivo(name);
        expect(user).toStrictEqual({uid: 'ABC567',
        username: name})
    })
})

