console.log("*********************Primer Ejercicio********************");
// EJERCICIO 1
class cabeceraPagina {
  titulo: string;
  color: string;
  fuente: string;
  alineacion: "left" | "center" | "right";

  constructor(
    titulo: string = "Título",
    color: string = "black",
    fuente: string = "Arial"
  ) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
    this.alineacion = "left";
  }

  obtener(): { titulo: string; color: string; fuente: string } {
    return {
      titulo: this.titulo,
      color: this.color,
      fuente: this.fuente,
    };
  }

  alineacionTexto(alineacion: "left" | "center" | "right"): void {
    if (["left", "center", "right"].includes(alineacion)) {
      this.alineacion = alineacion;
    } else {
      console.error("Alineación inválida. Use 'left', 'center' o 'right'.");
    }
  }

  imprimir(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
  }
}

const firstTittle = new cabeceraPagina("12 Rules for Life", "black", "Roboto");

console.log(firstTittle.obtener());
firstTittle.alineacionTexto("center");
firstTittle.imprimir();

console.log("*********************Segundo Ejercicio********************");
// EJERCICIO 2
class calculadora {
  primerNumero: number;
  segundoNumero: number;

  constructor(primerNumero: number = 0, segundoNumero: number = 0) {
    this.primerNumero = primerNumero;
    this.segundoNumero = segundoNumero;
  }

  sumar(): number {
    return this.primerNumero + this.segundoNumero;
  }

  restar(): number {
    return this.primerNumero - this.segundoNumero;
  }

  multiplicar(): number {
    return this.primerNumero * this.segundoNumero;
  }

  dividir(): number {
    return this.primerNumero / this.segundoNumero;
  }

  potencia(): number {
    return this.primerNumero ** this.segundoNumero;
  }

  factorial(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  factorialDeAmbos(): string {
    const factPrimerNumero = this.factorial(this.primerNumero);
    const factSegundoNumero = this.factorial(this.segundoNumero);
    return `${factPrimerNumero} ${factSegundoNumero}`;
  }
}

const numeros = new calculadora(2, 2);
console.log(numeros.sumar());
console.log(numeros.restar());
console.log(numeros.multiplicar());
console.log(numeros.potencia());
console.log(numeros.factorialDeAmbos());

console.log("*********************Tercer Ejercicio********************");
// EJERCICIO 3
class cancion {
  titulo: string;
  genero: string;
  private autor: string;

  constructor(titulo: string = "titulo", genero: string = "blues") {
    this.titulo = titulo;
    this.genero = genero;
    this.autor = "";
  }

  get _autor(): string {
    return this.autor;
  }

  set _autor(autor: string) {
    this.autor = autor;
  }

  cancion(): string {
    return `Titulo: ${this.titulo}, Genero: ${this.genero}, Autor: ${this.autor}`;
  }
}

const cancion1 = new cancion("Heavy is the crown", "Rock");
cancion1._autor = "Linkin Park";
console.log(cancion1.cancion());

console.log("***********************Cuarto Ejercicio********************");
// EJERCICIO 4

class cuenta {
  nombre: string;
  cantidad: number;
  tipo: string;
  numberoCuenta: number;

  constructor(
    nombre: string = "nombre",
    cantidad: number = 0,
    tipo: string = "Estandar",
    numberoCuenta: number = 0
  ) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipo = tipo;
    this.numberoCuenta = numberoCuenta;
  }

  depositar(cantidadDepositar: number): void {
    if (cantidadDepositar < 5) {
      console.log("El valor a depositar debe ser mayor a $5.00.");
    } else {
      this.cantidad += cantidadDepositar;
      console.log(`Se ha depositado correctamente $${cantidadDepositar}.`);
    }
  }

  retirar(valor: number): void {
    if (valor < 5) {
      console.log("El valor a retirar debe ser mayor a $5.00.");
    } else if (this.cantidad - valor < 5) {
      console.log(
        "No hay suficiente dinero en la cuenta para realizar el retiro."
      );
    } else {
      this.cantidad -= valor;
      console.log(
        `Se ha retirado correctamente $${valor}. Saldo restante: $${this.cantidad}.`
      );
    }
  }

  usuario() {
    console.log(`
      Usuario:${this.nombre}
      Tipo de Cuenta: ${this.tipo}
      Numero de Cuenta: ${this.numberoCuenta}`);
  }
}

const nuevoUsuario = new cuenta("Juan", 10, "Estandar", 1405164874);

console.log(nuevoUsuario);

nuevoUsuario.depositar(5);
nuevoUsuario.depositar(2);
nuevoUsuario.retirar(2);
nuevoUsuario.retirar(6);
nuevoUsuario.usuario();

console.log("***********************Quinto Ejercicio********************");
// EJERCICIO 5

abstract class persona {
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: number;
  edad: number;

  constructor(
    nombre: string = "nombre",
    apellido: string = "apellido",
    direccion: string = "direccion",
    telefono: number = 938498484,
    edad: number = 18
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  mayor() {
    return this.edad > 18
      ? console.log(" Es mayor de edad")
      : console.log("Es menor de edad");
  }

  abstracto() {
    console.log(`
    Nombre completo: ${this.nombre} ${this.apellido}
    Direccion: ${this.direccion}
    Telefono: ${this.telefono}
    Edad: ${this.edad}`);
  }
}

class empleado extends persona {
  sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    sueldo: number = 0,
    direccion: string = "direccion",
    telefono: number = 938498484
  ) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  cargarSueldo(sueldo: number) {
    this.sueldo = sueldo;
  }

  imprimirSueldo() {
    console.log(`Sueldo: ${this.sueldo}`);
  }

  abstracto() {
    console.log(`
      Nombre completo: ${this.nombre} ${this.apellido}
      Direccion: ${this.direccion}
      Telefono: ${this.telefono}
      Edad: ${this.edad}
      Sueldo: ${this.sueldo}
    `);
  }
}

const empleado1 = new empleado("Juan", "Orellana", 30, 3000);
empleado1.mayor();
empleado1.abstracto();
