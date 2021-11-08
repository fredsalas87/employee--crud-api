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

// ========================================================================================
// const fastify = require('fastify')({ logger: true })
// const fileUpload = require('fastify-file-upload')
// const PORT = 3000

// fastify.register(fileUpload)

// fastify.get('/', async(request, reply) => {
//   return { hello: 'world'}
// });

// fastify.post('/upload', (req, res) => {
//   const files = req.raw.file
//   const nome = req.headers.fiename
//   console.log(files)

//   let fileArr = []

//   res.send(fileArr)
// });

// fastify.post('/upload/imagem', async(req, res) => {
//   const data = await req.file()
//   data.file
//   data.fields
//   data.fieldname
//   data.filename
//   data.encoding
//   data.mimetype

//   await pump(req.file, fs.createWriteStream('D:/Downloads' + req.headers.filename))
//   reply.send()
// });

// =======================================================================================
// Funcionando está parte
// const fastify = require('fastify')({ logger: true })
// // fastify.register(require('fastify-file-upload'))

// const PORT = 3000

// fastify.get('/items', (req, reply) => {
//   reply.send({ test: 'Hello' })
// })

// const start = async () => {
//   try {
//     await fastify.listen(PORT)
//   } catch (error) {
//     fastify.log.error(error)
//     process.exit(1)
//   }
// }

// start()

// ===================================================================================
// 'use strict'

// const fastify = require('fastify')({ logger: true })
// const fileUpload = require('fastify-file-upload')

// fastify.register(fileUpload)

// fastify.post('/upload', function (req, reply) {
//   // some code to handle file
//   const files = req.raw.files
//   console.log(files)
//   let fileArr = []
//   for(let key in files){
//     fileArr.push({
//       name: files[key].name,
//       mimetype: files[key].mimetype
//     })
//   }
//   reply.send(fileArr)
// })

// fastify.listen(3000, err => {
//   if (err) throw err
//   console.log(`server listening on ${fastify.server.address().port}`)
// })
