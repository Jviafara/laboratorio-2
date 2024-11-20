let n1 = 15;
let n2 = 25;
let result = 0;
let operacion = '';

const realizarOperacion = (n1, n2, operacion) => {
    operacion = operacion.toLowerCase();

    if (typeof n1 !== 'number' || typeof n2 !== 'number')
        return 'Error! ingrese datos validos';
    else if (operacion === 'suma') return n1 + n2;
    else if (operacion === 'resta') return n1 - n2;
    else if (operacion === 'multiplicacion') return n1 * n2;
    else if (operacion === 'division') {
        if (n2 === 0) return 'Error! No se puede divir entre 0.';
        return n1 / n2;
    } else return 'Error! ingrese datos validos.';

    //Uso de switch
    //  switch (operacion) {
    //      case 'suma':
    //          return n1 + n2;
    //          break;
    //      case 'resta':
    //          return n1 - n2;
    //          break;
    //      case 'multiplicacion':
    //          return n1 * n2;
    //          break;
    //      case 'suma':
    //          return n1 / n2;
    //          break;
    //      default:
    //          break;
    //  }
};

console.log(realizarOperacion(n1, n2, 'multiplicacion'));

while (operacion !== 'salir') {
    n1 = parseFloat(prompt('Ingrese el primer número: '));
    n2 = parseFloat(prompt('Ingrese el segundo número: '));
    operacion = prompt(
        'Ingrese la operacion a realizar: (suma,resta,multiplicacion o division. Digite salir para finalizar'
    ).toLocaleLowerCase();

    if (operacion === 'salir') {
        alert('Finalizando la calculadora, Adios!!!');
        brak;
    }

    result = realizarOperacion(n1, n2, operacion);
    operacion = prompt(
        `El resultrado es = ${result}, Desea realizar otra operacion? SI/NO`
    );
    if (operacion !== 'si') {
        operacion = 'salir';
        alert('Finalizando la calculadora, Adios!!!');
    }
}
