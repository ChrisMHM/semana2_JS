function devolverString(str) {
    // 🎯 'Return' la string provista: str
    // Tu código: 
    return str;
}

function suma(x, y) {
    // "x" e "y" son números: 
    // 🎯 suma "x" e "y" y retorná el valor
    // Tu código: 
    return x + y;
}

function resta(x, y) {
    // 🎯 resta "y" e "x" y retorná el valor
    // Tu código:
    return y - x;
}

function multiplicar(x, y) {
    // 🎯 multiplica "x" e "y" y retorná el valor
    // Tu código: 
    return x * y;
}

function dividir(x, y) {
    // 🎯 dividí "x" e "y" y retorná el valor
    // Tu código: 
    if (y > 0) {
        return x / y;
    }

    return null;
}

function igualdad(x, y) {
    // 🎯 Devolvé "true" si "x" e "y" son iguales, de lo contrario devolvé "false".
    // Tu código: 
    return x === y;
}

function compararLongitur(str1, str2) {
    // 🎯 Devolvé "true" si las dos strings tienen la misma longitud, de lo contrario devolvé "false".
    // Tu código: 
    return str1.length === str2.length;
}

function menorQueNoventa(num) {
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es menor que noventa, de lo contrario devolvé "false".
    // Tu código: 
    return num < 90;
}

function mayorQueCincuenta(num) {
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es mayor que cincuenta, de lo contrario devolvé "false".
    // Tu código: 
    return num > 50;
}

function obtenerResto(x, y) {
    // 🎯 Obtener el resto de la división de "x" e "y".
    // Tu código: 
    return x % y;
}

function esPar(num) {
    // 🎯 Devolvé "true" si "num" es par, de lo contario devolvé "false".
    // Tu código: 
    return num % 2 === 0;
}

function esImpar(num) {
    // 🎯 Devolvé "true" si "num" es impar, de lo contario devolvé "false".
    // Tu código: 
    return num % 2 === 1;
}

function elevarAlCuadrado(num) {
    // 🎯 Devolvé el valor de "num" elevado al cuadrado.
    // Tu código: 
    return num * num;
}

function elevarAlCubo(num) {
    // 🎯 Devolvé el valor de "num" elevado al cubo.
    // Tu código: 
    return num * num * num;
}

function elevar(num, exponent) {
    // 🎯 Devolvé el valor de "num" elevado al exponente dado en "exponent".
    // Tu código: 
    return Math.pow(num, exponent);
}

function redondearNumero(num) {
    // 🎯 Devolvé el valor de "num" redondeado al entero más próximo.
    // Tu código: 
    return Math.round(num);
}

function redondearHaciaArriba(num) {
    // 🎯 Devolvé el valor de "num" redondeado hacia arriba (al próximo entero).
    // Tu código: 
    return Math.ceil(num);
}

function numeroRandom() {
    // 🎯 Generar un número al azar entre 0 y 1 y devolverlo.
    // 🕵️ Pista: investigá que hace el método Math.random(). 
    // Tu código: 
    return Math.random();
}

function esPositivo(num) {
    // La función va a recibir un número entero. Devolvé como resultado una cadena de texto que indica si el número es positivo o negativo: 
    // 🎯 Si el número es positivo, devolver el string "Es positivo".
    // 🎯 Si el número es negativo, devolver el string "Es negativo".
    // 🎯 Si el número es 0, devolver false.
    // Tu código: 
    let str = "";

    if (num > 0) {
        str = "Es positivo";
    } else if (num < 0) {
        str = "Es negativo";
    } else {
        str = "false";
    }

    return str;
}

function agregarSimboloDeExclamacion(str) {
    // 🎯 Agregá un símbolo de exclamación al final de la string "str" y devolvé una nueva string 
    // Ejemplo: "hello world" pasaría a ser "hello wolrd!".
    // Tu código: 
    return `${str}!`;
}

function combinarNombres(nombre, apellido) {
    // 🎯 Devolver "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Diego", "Maldonado" => "Diego Maldonado".
    // Tu código: 
    return nombre + " " + apellido;
}

function retornarSaludo(nombre) {
    // 🎯 Tomá la string "nombre" y concatená otras string en la cadena para que tome la siguiente forma:
    // "Diego" => "Hola Diego!".
    // Tu código: 
    return `Hola ${nombre}!`;
}

function areaDelRectangulo(alto, ancho) {
    // 🎯 Devolver el área de un rectángulo teniendo su altura y ancho.
    // 🕵️ Pista: investigá como se calcula el area de un rectángulo. 
    // Tu código: 
    return alto * ancho;
}

function perimetroDelCuadrado(lado) {
    // 🎯 Escibí una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    // 🕵️ Pista: investigá como se calcula el perímetro de un cuadrado. 
    // Tu código: 
    return lado * 4;
}

function areaDelTriangulo(base, altura) {
    // 🎯 Desarrollá una función que calcule el área de un triángulo.
    // 🕵️ Pista: investigá como se calcula el área de un triángulo. 
    // Tu código: 
    return (base * altura) / 2;
}

function deEuroAdolar(euro) {
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // 🎯 Escribí un programa que reciba como parámetro un número de euros y calcule el cambio en dólares.
    // Tu código: 
    return euro * 1.20;
}

function esVocal(letra) {
    // 🎯 Escribí una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".  
    // 🎯 Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". 
    // Tu código: 
    let respuesta = "";

    if (letra.length > 1) {
        return "Dato incorrecto";
    }


    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        respuesta = "Es vocal";
    }

    return respuesta;
}