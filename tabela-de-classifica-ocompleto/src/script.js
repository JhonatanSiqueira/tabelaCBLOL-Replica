//          chave.  valor.
var furia = { nome: "FURIA", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0 };
var kabum = { nome: "KABUM", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0 };
var red = { nome: "RED Canids", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0 };
var loud = { nome: "LOUD", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0 };
var miners = { nome: "MINERS", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0 };
var liberty = { nome: "LIBERTY", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0};
var pain = { nome: "PAIN", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0 };
var rensga = { nome: "RENSGA", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0 };
var flamengo = { nome: "FLAMENGO", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0};
var intz = { nome: "INTZ", jogos: 0, vitorias: 0, derrotas: 0, aproveitamento: 0 };

var equipes = [furia, kabum, red, loud, miners, liberty, pain, rensga, flamengo, intz];
var win = 0;

function exibeJogadoresNaTela(equipes) {
  var elemento = "";
  for (var i = 0; i < equipes.length; i++) {
    elemento += "<tr><td>" + equipes[i].nome + "</td>";
    elemento += "<td>" + equipes[i].jogos + "</td>";
    elemento += "<td>" + equipes[i].vitorias + "</td>";
    elemento += "<td>" + equipes[i].derrotas + "</td>";
    elemento += "<td>" + equipes[i].aproveitamento + "</td>";

    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaEquipes = document.getElementById("tabelaEquipes");
  tabelaEquipes.innerHTML = elemento;
}

exibeJogadoresNaTela(equipes);

function adicionarVitoria(i) {
  var jogador = equipes[i];
  jogador.vitorias++;
  equipes[i].jogos++;
  win++;
  equipes[i].aproveitamento = ((win / equipes[i].jogos)*100).toFixed(1);
  exibeJogadoresNaTela(equipes);
}

function adicionarDerrota(i) {
  var jogador = equipes[i];
  jogador.derrotas++;
  equipes[i].jogos++;
  equipes[i].aproveitamento = ((win / equipes[i].jogos)*100).toFixed(1);
  exibeJogadoresNaTela(equipes);
}




 


