'use strict';

import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.post('/echo', (req, res) => {
  res.json(req.body);
});

server.use(router);

server.listen(3000, () => {
  const msg = `
=====================================================
  JSON Server is running.
  
  Try superagent out
  
  on Browser: http://localhost:3000/
  on Node   : npm run request
=====================================================
`;
  console.log(msg);
});
