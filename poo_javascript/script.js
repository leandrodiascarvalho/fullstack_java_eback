class Mostro {
  constructor(nome, ataque, defesa, nivel) {
    if (new.target === Mostro) {
      throw new Error("Não é possível instanciar a classe abstrata Mostro");
    }
    this.nome = nome;
    this.ataque = ataque;
    this.defesa = defesa;
    this.nivel = nivel;
  }

  exibirStatus() {
    console.log(
      `Nome: ${this.nome}, Ataque: ${this.ataque}, Defesa: ${this.defesa}, Nível: ${this.nivel}`
    );
  }

  atacar(outroMostro) {
    throw new Error("Método abstrato 'atacar' não implementado");
  }
}

class Mago extends Mostro {
  constructor(nome, ataque, defesa, nivel, pontosMagia) {
    super(nome, ataque, defesa, nivel);
    this.pontosMagia = pontosMagia;
  }

  atacar(outroMostro) {
    console.log(`${this.nome} ataca ${outroMostro.nome} com magia!`);
    if (this.ataque > outroMostro.defesa) {
      console.log(`${outroMostro.nome} foi derrotado!`);
    } else {
      console.log(`${outroMostro.nome} resistiu ao ataque!`);
    }
  }

  lancarMagia() {
    if (this.pontosMagia >= 10) {
      console.log(`${this.nome} lança uma magia poderosa!`);
      this.pontosMagia -= 10;
      console.log(`Pontos de magia restantes: ${this.pontosMagia}`);
    } else {
      console.log(`${this.nome} não tem pontos de magia suficientes!`);
    }
  }
}

class Dragao extends Mostro {
  constructor(nome, ataque, defesa, nivel, elemento, pontosFogo = 100) {
    super(nome, ataque, defesa, nivel);
    this.elemento = elemento;
    this.pontosFogo = pontosFogo;
  }

  atacar(outroMostro) {
    console.log(`${this.nome} ataca ${outroMostro.nome} com ${this.elemento}!`);
    if (this.ataque > outroMostro.defesa) {
      console.log(`${outroMostro.nome} foi derrotado!`);
    } else {
      console.log(`${outroMostro.nome} resistiu ao ataque!`);
    }
  }

  soltarFogo() {
    if (this.pontosFogo >= 10) {
      console.log(`${this.nome} solta uma rajada de fogo!`);
      this.pontosFogo -= 10;
      console.log(`Pontos de fogo restantes: ${this.pontosFogo}`);
    } else {
      console.log(`${this.nome} não tem pontos de fogo suficientes!`);
    }
  }
}

// Instanciando os monstros
const magoNegro = new Mago("Mago Negro", 2500, 2100, 7, 100);
const dragaoFumaca = new Dragao("Dragão de Fumaça", 3000, 2500, 8, "fogo");
const dragaoBranco = new Dragao("Dragão Branco", 2800, 2300, 7, "gelo");
const magoDoCaos = new Mago("Mago do Caos", 2700, 2200, 6, 90);

// Exibindo status
console.log("---Status dos monstros:---");
magoNegro.exibirStatus();
dragaoFumaca.exibirStatus();
dragaoBranco.exibirStatus();
magoDoCaos.exibirStatus();

console.log("\n--- Ações dos Monstros ---");
magoNegro.lancarMagia();
dragaoBranco.soltarFogo();

console.log("\n--- Duelo! ---");
dragaoBranco.atacar(magoNegro);

console.log("\n--- Ações dos Monstros ---");
magoDoCaos.lancarMagia();
magoDoCaos.lancarMagia();
dragaoFumaca.soltarFogo();
dragaoFumaca.soltarFogo();

console.log("\n--- Duelo! ---");
console.log("\n--- Duelo! ---");
magoDoCaos.atacar(dragaoFumaca);
dragaoFumaca.atacar(magoDoCaos);
