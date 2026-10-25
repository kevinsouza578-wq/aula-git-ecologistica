const http = require('node:http');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const PORT = Number(process.env.PORT || 3000);
const arquivoRotas = path.join(__dirname, 'rotas-iniciais.json');

function responderJson(res, status, dados) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(dados, null, 2));
}

const servidor = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return responderJson(res, 405, { erro: 'Metodo nao permitido' });
  }

  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/') {
    return responderJson(res, 200, {
      projeto: 'EcoLogística',
      descricao: 'MVP de consulta de rotas de entrega',
      endpoints: ['GET /', 'GET /health', 'GET /rotas', 'GET /rotas/:id']
    });
  }

  if (url.pathname === '/health') {
    return responderJson(res, 200, { status: 'ok' });
  }

  if (url.pathname === '/rotas' || url.pathname.startsWith('/rotas/')) {
    try {
      const dados = JSON.parse(readFileSync(arquivoRotas, 'utf8'));
      if (url.pathname === '/rotas') {
        return responderJson(res, 200, dados);
      }

      const id = url.pathname.slice('/rotas/'.length);
      const rota = dados.rotas.find(item => item.id === id);
      return rota
        ? responderJson(res, 200, rota)
        : responderJson(res, 404, { erro: 'Rota nao encontrada', id });
    } catch (erro) {
      console.error('Falha ao carregar as rotas:', erro.message);
      return responderJson(res, 500, { erro: 'Nao foi possivel carregar as rotas' });
    }
  }

  return responderJson(res, 404, { erro: 'Rota nao encontrada' });
});

servidor.listen(PORT, () => {
  console.log(`EcoLogística disponível em http://localhost:${PORT}`);
});
