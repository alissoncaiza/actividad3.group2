// Variables y Tipos
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// String
var nombre = "Juan";
console.log("Nombre: ".concat(nombre));
// Number
var edad = 30;
console.log("Edad: ".concat(edad));
// Boolean
var esEstudiante = true;
console.log("Es estudiante: ".concat(esEstudiante));
// Array
var listaNumeros = [1, 2, 3, 4, 5];
console.log("Lista de n\u00FAmeros: ".concat(listaNumeros));
// Tuple
var persona;
persona = ["Alice", 25];
console.log("Persona: ".concat(persona[0], ", Edad: ").concat(persona[1]));
// Enum
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Verde;
console.log("Color favorito: ".concat(Color[colorFavorito]));
// Funciones
function sumar(a, b) {
    return a + b;
}
console.log("Suma: ".concat(sumar(5, 7)));
function saludar(nombre) {
    return "Hola, ".concat(nombre, "!");
}
console.log(saludar("Carlos"));
function obtenerElemento(elemento) {
    return elemento;
}
console.log(obtenerElemento(42));
console.log(obtenerElemento("Genérico"));
function formatearUsuario(usuario) {
    return "Usuario: ".concat(usuario.name, ", Email: ").concat(usuario.email, ", Edad: ").concat(usuario.age);
}
var usuarioEjemplo = {
    id: 1,
    name: "Ana",
    email: "ana@example.com",
    age: 28
};
console.log(formatearUsuario(usuarioEjemplo));
// Clases
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona.prototype.presentarse = function () {
        return "Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, puesto, salario) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.puesto = puesto;
        _this.salario = salario;
        return _this;
    }
    Empleado.prototype.obtenerPuesto = function () {
        return this.puesto;
    };
    Empleado.prototype.obtenerSalario = function () {
        return this.salario;
    };
    Empleado.prototype.presentarse = function () {
        return "".concat(_super.prototype.presentarse.call(this), " Trabajo como ").concat(this.puesto, " y gano ").concat(this.salario, " al a\u00F1o.");
    };
    return Empleado;
}(Persona));
var empleadoEjemplo = new Empleado("Luis", 35, "Desarrollador", 50000);
console.log(empleadoEjemplo.presentarse());
