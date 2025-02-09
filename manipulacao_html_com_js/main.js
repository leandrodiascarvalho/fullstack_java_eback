function validarFormulario(formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const campoA = document.getElementById("campoA").value;
        const campoB = document.getElementById("campoB").value;
        const mensagem = document.getElementById("mensagem");

        mensagem.textContent = "";

        // Converte os valores para números (importante para comparações numéricas)
        const valorA = Number(campoA);
        const valorB = Number(campoB);

        if (valorB > valorA) {
            mensagem.textContent = "Formulário válido: Campo B é maior que Campo A.";
            mensagem.style.color = "green";
            formulario.classList.add("valido");
            formulario.classList.remove("invalido");
        } else if (valorA >= valorB) {
            mensagem.textContent = "Erro: Campo B deve ser maior que Campo A.";
            mensagem.style.color = "red";
            formulario.classList.add("invalido");
            formulario.classList.remove("valido");
        } else if (valorA < 0 || valorB < 0) {
            mensagem.textContent = "Erro: Números negativos não são permitidos.";
            mensagem.style.color = "red";
            formulario.classList.add("invalido");
            formulario.classList.remove("valido");
        }
    });
}

const formulario = document.getElementById("formulario");
validarFormulario(formulario);