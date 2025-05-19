document.addEventListener("DOMContentLoaded", function () {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const sortearButton = document.getElementById("sortear");
  const limparButton = document.getElementById("limpar");
  const resultadoDiv = document.getElementById("resultado");

  sortearButton.addEventListener("click", function () {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max) || min > max) {
      resultadoDiv.textContent = "Intervalo inválido!";
      return;
    }

    // Gera um único número aleatório dentro do intervalo
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    resultadoDiv.textContent = `Número sorteado: ${numeroSorteado}`;
  });

  limparButton.addEventListener("click", function () {
    resultadoDiv.textContent = "";
  });
});
