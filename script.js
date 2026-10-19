function sumar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    console.log("Número 1: ", numero1);
    console.log("Número 2: ", numero2);

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").value = "Ingresa ambos números";
        console.log("Error: Ingresa ambos números");
        return;
    }

    const suma = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById("resultado").value = suma;
    console.log("Resultado suma: ", suma);
}

function restar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    console.log("Número 1: ", numero1);
    console.log("Número 2: ", numero2);

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").value = "Ingresa ambos números";
        console.log("Error: Ingresa ambos números");
        return;
    }

    const resta = parseFloat(numero1) - parseFloat(numero2);
    document.getElementById("resultado").value = resta;
    console.log("Resultado resta: ", resta);
}

function multiplicar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    console.log("Número 1: ", numero1);
    console.log("Número 2: ", numero2);

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").value = "Ingresa ambos números";
        console.log("Error: Ingresa ambos números");
        return;
    }

    const multiplicacion = parseFloat(numero1) * parseFloat(numero2);
    document.getElementById("resultado").value = multiplicacion;
    console.log("Resultado multiplicación: ", multiplicacion);
}

function dividir() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    console.log("Número 1: ", numero1);
    console.log("Número 2: ", numero2);

    if (numero1 === "" || numero2 === "") {
        document.getElementById("resultado").value = "Ingresa ambos números";
        console.log("Error: Ingresa ambos números");
        return;
    }

    if (parseFloat(numero2) === 0) {
        document.getElementById("resultado").value = "Error: No se puede dividir entre cero";
        console.log("Error: No se puede dividir entre cero");
        return;
    }

    const division = parseFloat(numero1) / parseFloat(numero2);
    document.getElementById("resultado").value = division;
    console.log("Resultado división: ", division);
}

function limpiar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("numero1").focus();
    console.log("Campos limpiados");
}