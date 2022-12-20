import { conectaApi } from "./conectaApi.js";

const $ = document.querySelector.bind(document);

const formulario = $('[data-formulario]');

async function criaVideo(evento) {
  evento.preventDefault();

  const url = $('[data-url]').value;
  const titulo = $('[data-titulo]').value;
  const imagem = $('[data-imagem]').value;
  const descricao = Math.floor(Math.random() * 10).toString();

  await conectaApi.criaVideos(titulo, descricao, url, imagem);

  window.location.href = '../pages/envio-concluido.html';
}

formulario.addEventListener('submit', evento => criaVideo(evento))