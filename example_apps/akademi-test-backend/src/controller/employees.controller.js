const employeesModel = require('../model/employees.model');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeesModel.getAllEmployees();

    res.json({ message: 'GET ALL EMPLOYEES', result: employees });
  } catch (error) {
    res.status(500).json({ message: 'GET ALL EMPLOYEES NOT FOUND, no tienes empleados 😢', result: [] });
  }
}

const getEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const employee = await employeesModel.getEmployeeById(employeeId);

    if (!employee) {
      res.status(404).json({ message: `GET EMPLOYEE BY ID ${employeeId} NOT FOUND` });
      return;
    }

    res.json({ message: 'GET EMPLOYEE BY ID', result: employee });
  } catch (error) {
    res.status(500).json({ message: 'GET EMPLOYEE BY ID NOT FOUND', result: {} });
  }
}

const getEmployeesByNameAndTeam = async (req, res) => {
  try {
    const { first_name, team_id, page, size } = req.query;
    const employees = await employeesModel.getEmployeesByNameAndTeam(first_name, team_id, page, size);

    res.json({ message: 'GET EMPLOYEES BY NAME AND TEAM', result: employees });
  } catch (error) {
    res.status(500).json({ message: 'GET EMPLOYEES BY NAME AND TEAM NOT FOUND', result: [] });
  }
}

const createEmployee = async (req, res) => {
  try {
    const newEmployee = req.body;
    const createdEmployee = await employeesModel.createEmployee(newEmployee);
    res.status(201).json({ message: 'POST EMPLOYEE', result: createdEmployee });
  } catch (error) {
    res.status(500).json({ message: 'POST EMPLOYEE NOT FOUND', result: {} });
  }
}

const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const updatedEmployee = await employeesModel.updateEmployee(employeeId, req.body);

    if (!updatedEmployee) {
      res.status(404).json({ message: `PUT EMPLOYEE BY ID ${employeeId} NOT FOUND` });
      return;
    }

    res.json({ message: 'PUT EMPLOYEE', result: updatedEmployee });
  } catch (error) {
    res.status(500).json({ message: 'PUT EMPLOYEE NOT FOUND', result: {} });
  }
}

const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const deletedEmployee = await employeesModel.deleteEmployee(employeeId);
    if (!deletedEmployee) {
      res.status(404).json({ message: `DELETE EMPLOYEE BY ID ${employeeId} NOT FOUND` });
      return;
    }

    res.json({ message: 'DELETE EMPLOYEE', result: deletedEmployee });
  } catch (error) {
    res.status(500).json({ message: 'DELETE EMPLOYEE NOT FOUND', result: {} });
  }
}

module.exports = {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  getEmployeesByNameAndTeam,
  updateEmployee,
}
