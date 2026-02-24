// let mensaje:string = "Hola mundo"
// let conteo = 5

// console.log(mensaje)
// console.log(conteo)

// const saludar = (saludo:number) => {
//     return console.log(saludo)
// }

// saludar(8127631263216)

interface Usuario {
    id:number,
    nombre: string,
    email: string,
    premium?: boolean
}

const newUser:Usuario = {id:1,nombre:"alberto",email:"algo@algo.com"}

console.log(newUser)