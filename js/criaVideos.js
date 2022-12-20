import { conectaApi } from "./conectaApi.js";

const $ = document.querySelector.bind(document);

const formulario = $('[data-formulario]');
const erro = $('[data-erro]');

async function criaVideo(evento) {
  evento.preventDefault();


  const url = $('[data-url]').value;
  const titulo = $('[data-titulo]').value;
  const imagem = $('[data-imagem]').value;
  const descricao = Math.floor(Math.random() * 10).toString();
  
  if (!url.includes('embed')) {
    erro.innerHTML = `<p class="mensagem__erro">Você precisa colocar a palavra embed depois de www.youtube.com/</p>`
    return
  }

  try {
    await conectaApi.criaVideos(titulo, descricao, url, imagem);
  
    window.location.href = '../pages/envio-concluido.html';
  } catch(e) {
    erro.innerHTML = e
  }
}

formulario.addEventListener('submit', evento => criaVideo(evento));
