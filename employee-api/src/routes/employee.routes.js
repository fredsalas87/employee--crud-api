/**
 * arquivo: routes/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 06/11/2021
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');
 
// ==> Definindo as rotas do CRUD - 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

//  ==> Rota responsável por listar todos os 'Colaboradores': (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

// ==> Rota responsável por listar um determinado 'Colaborador(a)' por Id: (GET): localhost:3000/api/employees/id
router.get('/employees/:id', employeeController.findEmployeeById);

// ==> Rota responsável por atualizar um determinado 'Colaborador(a)' por Id: (PUT): localhost:3000/api/employees/id
router.put('/employees/:id', employeeController.updateEmployeeById);

// ==> Rota responsável por deletar/excluir um determinado 'Colaborador(a)' por Id: (DELETE): localhost:3000/api/employees/id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router;