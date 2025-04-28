function realizarConversion() {
    const inicial = document.getElementById('gradoInicial').value;
    const final = document.getElementById('gradoFinal').value;
    const valorInput = document.getElementById('valor').value;
    const resultadoDiv = document.getElementById('resultado');

    // Verificamos si el valor ingresado es un número válido
    if (isNaN(valorInput) || valorInput === "") {
        resultadoDiv.innerText = "Por favor, ingresa un valor numérico válido."; // Mensaje de error
        return; // Salimos de la función si el valor no es válido
    }

    // Convertimos el valor de entrada a tipo número
    const valor = parseFloat(valorInput);

    // Llamamos a la función para hacer la conversión
    const resultado = convertirTemperatura(inicial, final, valor);

    // Formateamos el resultado a dos decimales
    const resultadoFormateado = resultado.toFixed(2);

    // Obtenemos las nomenclaturas para mostrar
    const nomenclaturaInicial = obtenerNomenclatura(inicial);
    const nomenclaturaFinal = obtenerNomenclatura(final);

    // Mostramos el resultado con las nomenclaturas
    resultadoDiv.innerText = `Resultado: ${resultadoFormateado} ${nomenclaturaFinal}`;
}

// Función que devuelve la nomenclatura de la escala
function obtenerNomenclatura(grado) {
    switch (grado) {
        case "A": return "°C"; // Celsius
        case "B": return "°F"; // Fahrenheit
        case "C": return "K";  // Kelvin
        case "D": return "°R"; // Rankine
        case "E": return "°Re"; // Réaumur
        case "F": return "°D"; // Delisle
        case "G": return "°N"; // Newton
        default: return ""; // Si no hay escala
    }
}

// Funciones de conversión entre diferentes escalas de temperatura (igual que antes)
function celsiusAFahrenheit(c) {
    return (c * 9/5) + 32;
}

function fahrenheitACelsius(f) {
    return (f - 32) * 5/9;
}

function celsiusAKelvin(c) {
    return c + 273.15;
}

function kelvinACelsius(k) {
    return k - 273.15;
}

function celsiusARankine(c) {
    return (c + 273.15) * 9/5;
}

function rankineACelsius(r) {
    return (r - 491.67) * 5/9;
}

function celsiusAReaumur(c) {
    return c * 4/5;
}

function reaumurACelsius(re) {
    return re * 5/4;
}

function celsiusADelisle(c) {
    return (100 - c) * 3/2;
}

function delisleACelsius(d) {
    return 100 - (d * 2/3);
}

function celsiusANewton(c) {
    return c * 33/100;
}

function newtonACelsius(n) {
    return n * 100/33;
}

function convertirTemperatura(gradoInicial, gradoFinal, valor) {
    let celsius;

    // Primero convertimos el valor a Celsius según la escala inicial
    switch (gradoInicial) {
        case "A": celsius = valor; break; // Celsius a Celsius
        case "B": celsius = fahrenheitACelsius(valor); break; // Fahrenheit a Celsius
        case "C": celsius = kelvinACelsius(valor); break; // Kelvin a Celsius
        case "D": celsius = rankineACelsius(valor); break; // Rankine a Celsius
        case "E": celsius = reaumurACelsius(valor); break; // Réaumur a Celsius
        case "F": celsius = delisleACelsius(valor); break; // Delisle a Celsius
        case "G": celsius = newtonACelsius(valor); break; // Newton a Celsius
        default: return "Escala inicial inválida."; // Si no se encuentra la escala
    }

    // Luego convertimos de Celsius a la escala final deseada
    switch (gradoFinal) {
        case "A": return celsius; // Celsius a Celsius
        case "B": return celsiusAFahrenheit(celsius); // Celsius a Fahrenheit
        case "C": return celsiusAKelvin(celsius); // Celsius a Kelvin
        case "D": return celsiusARankine(celsius); // Celsius a Rankine
        case "E": return celsiusAReaumur(celsius); // Celsius a Réaumur
        case "F": return celsiusADelisle(celsius); // Celsius a Delisle
        case "G": return celsiusANewton(celsius); // Celsius a Newton
        default: return "Escala final inválida."; // Si no se encuentra la escala
    }
}
