"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (isZeroOrDivisivelPorZero(b)) {
        return NaN;
    }
    return a / b;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function greet(name) {
    return "Ol\u00E1, ".concat(name, "!");
}
// Função para verificar se o número é zero ou se a divisão será por zero
function isZeroOrDivisivelPorZero(num) {
    return num === 0;
}
function iniciarCalculadora() {
    console.log("---Bem-vindo à calculadora!---");
    console.log("\n--Saudação--\n");
    var name = readlineSync.question("Qual é o seu nome? ");
    console.log(greet(name));
    console.log("\n--Operações--\n");
    var num1 = readlineSync.questionFloat("Digite o primeiro número: ");
    var num2 = readlineSync.questionFloat("Digite o segundo número: ");
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, insira números válidos.");
        return;
    }
    console.log("\nResultados:");
    console.log("Soma: ".concat(add(num1, num2)));
    console.log("Subtra\u00E7\u00E3o: ".concat(subtract(num1, num2)));
    console.log("Multiplica\u00E7\u00E3o: ".concat(multiply(num1, num2)));
    var resultadoDivisao = divide(num1, num2);
    if (isNaN(resultadoDivisao)) {
        console.log("Divisão por zero não é permitida.");
    }
    else {
        console.log("Divis\u00E3o: ".concat(resultadoDivisao));
    }
}
iniciarCalculadora();
