import * as readlineSync from "readline-sync";

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (isZeroOrDivisivelPorZero(b)) {
    return NaN;
  }
  return a / b;
}

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function greet(name: string): string {
  return `Olá, ${name}!`;
}

// Função para verificar se o número é zero ou se a divisão será por zero
function isZeroOrDivisivelPorZero(num: number): boolean {
  return num === 0;
}

function iniciarCalculadora() {
  console.log("---Bem-vindo à calculadora!---");
  console.log("\n--Saudação--\n");
  const name = readlineSync.question("Qual é o seu nome? ");
  console.log(greet(name));
  console.log("\n--Operações--\n");
  const num1 = readlineSync.questionFloat("Digite o primeiro número: ");
  const num2 = readlineSync.questionFloat("Digite o segundo número: ");

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, insira números válidos.");
    return;
  }

  console.log(`\nResultados:`);
  console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

  const resultadoDivisao = divide(num1, num2);
  if (isNaN(resultadoDivisao)) {
    console.log("Divisão por zero não é permitida.");
  } else {
    console.log(`${num1} / ${num2} = ${resultadoDivisao}`);
  }
}

iniciarCalculadora();
