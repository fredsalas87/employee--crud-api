/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execuxção do Back-End ('Employee')
 * data: 06/11/2021
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});