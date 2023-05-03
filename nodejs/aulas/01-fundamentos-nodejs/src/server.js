import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  //console.log(req.headers)
  
  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: 'John Duo',
      email: 'jhonduo@email.com'
    });
    return res.end("Criação de usuários");
  }
  
  return res.end('Hello World!');
});

server.listen(3333, () => {
  console.log(`✨ Servidor rodando na porta 3333!`);
});