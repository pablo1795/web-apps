const express = require('express');
const router = express.Router();
const employeesController = require('../controller/employees.controller');

router.get('/', employeesController.getAllEmployees);
router.get('/:id', employeesController.getEmployeeById);
router.get('/:search', employeesController.getEmployeesByNameAndTeam);
router.post('/create_employee', employeesController.createEmployee);
router.put('/update_employee/:id', employeesController.updateEmployee);
router.delete('/delete_employee/:id', employeesController.deleteEmployee);

module.exports = router;
