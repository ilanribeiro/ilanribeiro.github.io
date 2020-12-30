let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');
let tela = document.querySelector('.tela');

let etapaAtual = 0;
let numero = '';
let isBranco = false;
let votos = [];
let audioUrna = new Audio('audio/audio-urna.mp3');

function comecarEtapa() {
  let etapa = etapas[etapaAtual]
  let numeroHtml = '';
  numero = '';
  isBranco = false;

  for(let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>'
    } else {
      numeroHtml += '<div class="numero"></div>';
    }
  }

  cargo.innerHTML = etapa.titulo;
  numeros.innerHTML = numeroHtml;
  seuVotoPara.style.display = 'none';
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML = '';
}

function atualizaInterface() {
  let etapa = etapas[etapaAtual]
  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero === numero) {
      return true
    }
  });

  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';

    if (candidato.vice) {
      descricao.innerHTML = `
      Nome: ${candidato.nome} <br/>
      Partido: ${candidato.partido}<br/>
      Vice: ${candidato.vice}
    `
    } else {
      descricao.innerHTML = `
      Nome: ${candidato.nome} <br/>
      Partido: ${candidato.partido}
      `
    }

    let fotosHtml = '';

    for(let i in candidato.fotos) {
      if (candidato.fotos[i].small) {
        fotosHtml += `
        <div class="d-1-image small">
          <img src='images/${candidato.fotos[i].url}'>
          ${candidato.fotos[i].legenda}
        </div>
        `
      } else {
        fotosHtml += `
        <div class="d-1-image">
          <img
            src='images/${candidato.fotos[i].url}'
            alt="avatar-cadidato"
          >
          ${candidato.fotos[i].legenda}
        </div>
        `
      }
    }
    lateral.innerHTML = fotosHtml;
  } else {
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = `
    <div class='aviso--numero'>NÚMERO ERRADO</div>
    <div class='aviso--grande pisca'>VOTO NULO</div>
    `
  }
}

function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca');
  if (elNumero !== null ) {
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;

    elNumero.classList.remove('pisca');
    if (elNumero.nextElementSibling) {
      elNumero.nextElementSibling.classList.add('pisca');
    } else {
      atualizaInterface();
    }
  }
}

function branco() {
  if (numero === '') {
    isBranco = true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = `
    <div class='aviso--branco pisca'>VOTO EM BRANCO</div>
    `
  } else {
    alert ('Para votar em BRANCO o campo de voto deve estar vazio. Aperte CORRIGE para apagar o campo de voto.')
  }
}

function corrige() {
  comecarEtapa();
}

function confirma() {
  let etapa = etapas[etapaAtual];

  let votoConfirmado = false;

  if (isBranco === true || etapa.numeros === numero.length) {
    votoConfirmado = true;
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: isBranco ? 'branco' : numero,
    })
  }

  if (votoConfirmado) {
    etapaAtual++;
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa();
    } else {
      tela.innerHTML = `
      <div class='aviso--fim'>FIM</div>
      `
      console.log('votos', votos);
    }
  }

  if (votos.length > 1) {
    audioUrna.play();
  }
}

comecarEtapa();
