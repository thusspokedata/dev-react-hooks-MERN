import { getSaludo} from "../../src/base-pruebas/02-template-string"

describe('pruebas en 02.template-string', () => {
    test("getsaludo debe retornar 'hola kilo'", () =>{
        const name= "Kilo";
        const message= getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
    })
})