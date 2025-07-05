const alunos = [{
  nome: "João",
  nota: 7.5
}, {
  nome: "Maria",
  nota: 8.0
}, {
  nome: "Pedro",
  nota: 6.5
}, {
  nome: "Ana",
  nota: 9.0
}, {
  nome: "Lucas",
  nota: 5.5
}, {
  nome: "Carla",
  nota: 8.5
}, {
  nome: "Rafael",
  nota: 7.0
}, {
  nome: "Fernanda",
  nota: 6.0
}, {
  nome: "Gustavo",
  nota: 9.5
}, {
  nome: "Sofia",
  nota: 8.2
}, {
  nome: "Roberto",
  nota: 7.8
}, {
  nome: "Juliana",
  nota: 6.8
}, {
  nome: "Tiago",
  nota: 5.0
}, {
  nome: "Larissa",
  nota: 9.1
}, {
  nome: "Eduardo",
  nota: 7.3
}, {
  nome: "Patrícia",
  nota: 8.7
}, {
  nome: "Marcos",
  nota: 6.2
}, {
  nome: "Camila",
  nota: 9.3
}, {
  nome: "Felipe",
  nota: 7.6
}, {
  nome: "Isabela",
  nota: 8.4
}];

/**
 * Filtra alunos aprovados (nota >= 6.0)
 * @param {Array} listaDeAlunos
 * @returns {Array}
 */
const filtrarAprovados = listaDeAlunos => {
  return listaDeAlunos.filter(aluno => aluno.nota >= 6.0);
};

/**
 * Exibe a tabela de alunos aprovados no HTML
 * @param {Array} alunosAprovados
 */
const exibirTabela = alunosAprovados => {
  const tabela = document.getElementById("tabela-aprovados"); // Corrigido o id
  tabela.innerHTML = ""; // Limpa o conteúdo

  if (alunosAprovados.length === 0) {
    tabela.innerHTML = "<p>Nenhum aluno aprovado.</p>";
    return;
  }

  // Cria a tabela
  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Nota</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");
  alunosAprovados.forEach(aluno => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.nota.toFixed(1)}</td>
    `;
    tbody.appendChild(row);
  });
  tabela.appendChild(table);
};

// Filtra os alunos aprovados
const alunosAprovados = filtrarAprovados(alunos);

// Executa após o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  exibirTabela(alunosAprovados);
});