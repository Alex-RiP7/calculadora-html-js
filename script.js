function sumar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").value = "Ingresa ambos números";
        return;
    }

    const suma = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById("resultado").value = suma;
}

function restar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").value = "Ingresa ambos números";
        return;
    }

    const resta = parseFloat(numero1) - parseFloat(numero2);
    document.getElementById("resultado").value = resta;
}

function multiplicar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").value = "Ingresa ambos números";
        return;
    }

    const multiplicacion = parseFloat(numero1) * parseFloat(numero2);
    document.getElementById("resultado").value = multiplicacion;
}

function dividir() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").value = "Ingresa ambos números";
        return;
    }

    if (parseFloat(numero2) === 0) {
        document.getElementById("resultado").value = "Error: No se puede dividir entre cero";
        return;
    }

    const division = parseFloat(numero1) / parseFloat(numero2);
    document.getElementById("resultado").value = division;
}

function limpiar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("numero1").focus();
}