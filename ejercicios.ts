// Variables y Tipos

// String
let nombre: string = "Juan";
console.log(`Nombre: ${nombre}`);

// Number
let edad: number = 30;
console.log(`Edad: ${edad}`);

// Boolean
let esEstudiante: boolean = true;
console.log(`Es estudiante: ${esEstudiante}`);

// Array
let listaNumeros: number[] = [1, 2, 3, 4, 5];
console.log(`Lista de números: ${listaNumeros}`);

// Tuple
let persona: [string, number];
persona = ["Alice", 25];
console.log(`Persona: ${persona[0]}, Edad: ${persona[1]}`);

// Enum
enum Color {
    Rojo,
    Verde,
    Azul
}
let colorFavorito: Color = Color.Verde;
console.log(`Color favorito: ${Color[colorFavorito]}`);

// Funciones

function sumar(a: number, b: number): number {
    return a + b;
}
console.log(`Suma: ${sumar(5, 7)}`);

function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Carlos"));

function obtenerElemento<T>(elemento: T): T {
    return elemento;
}
console.log(obtenerElemento<number>(42));
console.log(obtenerElemento<string>("Genérico"));

// Interfaces

interface Usuario {
    id: number;
    name: string;
    email: string;
    age: number;
}

function formatearUsuario(usuario: Usuario): string {
    return `Usuario: ${usuario.name}, Email: ${usuario.email}, Edad: ${usuario.age}`;
}

let usuarioEjemplo: Usuario = {
    id: 1,
    name: "Ana",
    email: "ana@example.com",
    age: 28
};
console.log(formatearUsuario(usuarioEjemplo));

// Clases

class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }

    public obtenerEdad(): number {
        return this.edad;
    }

    public presentarse(): string {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

class Empleado extends Persona {
    private puesto: string;
    private salario: number;

    constructor(nombre: string, edad: number, puesto: string, salario: number) {
        super(nombre, edad);
        this.puesto = puesto;
        this.salario = salario;
    }

    public obtenerPuesto(): string {
        return this.puesto;
    }

    public obtenerSalario(): number {
        return this.salario;
    }

    public presentarse(): string {
        return `${super.presentarse()} Trabajo como ${this.puesto} y gano ${this.salario} al año.`;
    }
}

let empleadoEjemplo = new Empleado("Luis", 35, "Desarrollador", 50000);
console.log(empleadoEjemplo.presentarse());