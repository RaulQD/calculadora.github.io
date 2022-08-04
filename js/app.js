// VARIABLES GLOBALES

const displayOneEl = document.querySelector('#display-1');
const btnNumeros = document.querySelectorAll('.numero');
const btnOperador = document.querySelectorAll('#operador');
const deleteAll = document.querySelector('#delete');
const btnIgual = document.querySelector('#igual');

// VARIABLES PARA ACCESO
let opActual = '';
let opAnterior = '';
let operador = undefined;

// CREAMOS LOS EVENTOS
btnNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        agregarNumero(boton.textContent);
    });
});
btnOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        seleccionarOperador(boton.textContent);
    })
});

deleteAll.addEventListener('click', () => {
    limpiarHTML();
    actualizarDisplay();
});

btnIgual.addEventListener('click', () => {
    calcular();
    actualizarDisplay();
});
// CREAMOS LAS FUNCIONES

// FUNCION PARA AGREGAR UN NUMERO, COMBIRTIENDOLO EN STRING
/**
 * The function agregarNumero takes a number as an argument and adds it to the end of the current
 * operation string.
 * @param num - The number that is being pressed.
 */
function agregarNumero(num) {
    /* Converting the number to a string and adding it to the end of the current operation string. */
    opActual = opActual.toString() + num.toString();
    actualizarDisplay();
};

// CREAMOS UNA FUNCIÓN PARA ACTUALIZAR EL CONTENIDO DEL TEXTO PARA MOSTRAR LOS NUMEROS
function actualizarDisplay() {
    displayOneEl.textContent = opActual;
};
// FUNCION PARA VALIDAR SI SELECCIONAMOS UN OPERADOR O NUMERO
function seleccionarOperador(op) {
    if (opActual === '') return
    if (opAnterior !== '') {
        calcular();
    };

    operador = op.toString();
    opAnterior = opActual;
    opActual = '';
};
// FUNCIÓN PARA CALCULAR LAS OPERACIONES MATEMATICAS

function calcular() {
    let calcular;
    const actual = parseFloat(opActual);
    const anterior = parseFloat(opAnterior);
    if (isNaN(anterior) || isNaN(actual)) return
    switch (operador) {
        case '+':
            calcular = anterior + actual;
            break;
        case '-':
            calcular = anterior - actual;
            break;
        case '/':
            calcular = anterior / actual;
            break;
        case 'x':
            calcular = anterior * actual;
            break;
        default:
            return;
    };

    opActual = calcular;
    operador = undefined;
    opAnterior = '';
};
// LIMPIAMOS EL HTML

function limpiarHTML() {
    opActual = '';
    opAnterior = '';
    operador = undefined;
};

limpiarHTML()
