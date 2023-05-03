import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;
  
  if (method === 'GET' && url === '/users') {
      res.end('Listagem de usuários')
  }
  if (method === "POST" && url === "/users") {
      res.end("Criação de usuários");
  }
  if (method === "PUT" && url === "/users") {
      res.end("Alteração de usuários");
  }
  if (method === "PATCH" && url === "/users") {
      res.end("Alterção específica de usuários");
  }
  if (method === "DELETE" && url === "/users") {
      res.end("Deleção de usuários");
  }

  return res.end('Hello World!');
});

server.listen(3333, () => {
  console.log(`✨ Servidor rodando na porta 3333!`);
});