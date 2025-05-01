document.addEventListener("DOMContentLoaded", function () {
  const carrosselContainer = document.querySelector(".carrossel-container");
  const carrossel = document.querySelector(".carrossel");
  const imagens = document.querySelectorAll(".carrossel img");
  const botaoAnterior = document.querySelector(".anterior");
  const botaoProximo = document.querySelector(".proximo");
  let indiceAtual = 0;
  let intervalo; // Variável para armazenar o ID do intervalo
  const tempoTransicao = 3000; // Tempo em milissegundos para a transição automática

  function atualizaCarrossel() {
    carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
  }

  function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizaCarrossel();
  }

  function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizaCarrossel();
  }

  function iniciarTransicaoAutomatica() {
    intervalo = setInterval(proximaImagem, tempoTransicao);
  }

  function pausarTransicaoAutomatica() {
    clearInterval(intervalo);
  }

  // Event listeners para os botões
  if (botaoProximo) {
    botaoProximo.addEventListener("click", () => {
      proximaImagem();
      pausarTransicaoAutomatica();
      iniciarTransicaoAutomatica();
    });
  }

  if (botaoAnterior) {
    botaoAnterior.addEventListener("click", () => {
      imagemAnterior();
      pausarTransicaoAutomatica();
      iniciarTransicaoAutomatica();
    });
  }

  // Iniciar transição automática ao carregar a página
  iniciarTransicaoAutomatica();

  // Pausar a transição automática ao passar o mouse
  if (carrosselContainer) {
    carrosselContainer.addEventListener(
      "mouseenter",
      pausarTransicaoAutomatica
    );

    // Reiniciar a transição automática ao remover o mouse
    carrosselContainer.addEventListener(
      "mouseleave",
      iniciarTransicaoAutomatica
    );
  }

  // Inicialização para garantir que a primeira imagem seja exibida corretamente
  atualizaCarrossel();
});
