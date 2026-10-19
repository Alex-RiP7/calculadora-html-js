function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultadoInput = document.getElementById('resultado');

    // Validar que ambos números sean válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultadoInput.value = 'Ingresa números válidos';
        return;
    }

    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultadoInput.value = 'Error: No se puede dividir entre cero';
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            return;
    }

    // Mostrar el resultado (redondeado a 8 decimales para evitar problemas de punto flotante)
    resultadoInput.value = Number(resultado.toFixed(8));
}

function limpiar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('num1').focus();
}