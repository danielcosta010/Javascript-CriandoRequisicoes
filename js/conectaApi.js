// https://github.com/danielcosta010/Javascript-CriandoRequisicoes/blob/main/db.json
//http://localhost:3000/videos
//https://gist.github.com/danielcosta010/c1447759437ca059a5a1b0cdaa239abe.js

//https://gist.github.com/c1447759437ca059a5a1b0cdaa239abe.git

//https://gist.github.com/danielcosta010/c1447759437ca059a5a1b0cdaa239abe

async function listaVideos () {
  const conexao = await fetch("https://mockend.com/org/Javascript-CriandoRequisicoes/users");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function criaVideos(titulo, descricao, url, imagem) {
  const conexao = await fetch("https://mockend.com/org/Jacascript-CriandoRequisicoes/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });

  if(!conexao.ok) {
    throw new Error (`<p class='mensagem__erro'>Não foi possível enviar o video</p>`);
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);

  const conexaoConvertida = conexao.json();
  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos, 
  criaVideos,
  buscaVideo
}