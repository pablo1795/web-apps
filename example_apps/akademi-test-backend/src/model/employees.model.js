const connection = require('../config/db.config');

const getAllEmployees = async (limit = 20) => {
    const [rows] = await connection.query(`SELECT * FROM employee ORDER BY _id DESC LIMIT ${limit}`);

    return rows.length > 0 ? rows : [];
}

const getEmployeeById = async (id) => {
    const rows = await connection.query(
        `SELECT * FROM employee WHERE _id = ?`,
        [id]
    ).spread(rows => rows);

    return rows[0]
}

const getEmployeesByNameAndTeam = async (first_name, team_id, page = 1, size = 10) => {
    const startIndex = (page - 1) * size;
    const limit = size;

    const [rows] = await connection.query(
        'SELECT * FROM employee WHERE first_name LIKE ? AND team_id = ? LIMIT ?, ?',
        [`%${first_name}%`, `%${team_id}%`, startIndex, limit]
    );

    return rows;
}

const createEmployee = async (values) => {
    const { first_name, last_name, cuit } = values;

    if (!first_name || !last_name || !cuit) {
        throw new Error('Los campos nombre, apellido y cuit son obligatorios');
    }

    const valuesArray = Object.values(values);

    const result = await connection.query(
        `INSERT INTO employee (first_name, last_name, cuit, team_id, join_date, rol) VALUES (?, ?, ?, ?, ?, ?)`,
        valuesArray
    );

    return result;
}

const updateEmployee = async (id, values) => {
    const { first_name, last_name, cuit, team_id, join_date, rol } = values;

    const [result] = await connection.query(
        `UPDATE employee SET first_name = ?, last_name = ?, cuit = ?, team_id = ?, join_date = ?, rol = ? WHERE _id = ?`,
        [first_name, last_name, cuit, team_id, join_date, rol, id]
    );

    if (result.affectedRows === 0) {
        throw new Error('El empleado no existe');
    }

    const [rows] = await connection.query(
        `SELECT * FROM employee WHERE _id = ?`,
        [id]
    );

    return rows[0];
}

const deleteEmployee = async (id) => {
    const result = await connection.query(
        `DELETE FROM employee WHERE _id = ?`,
        [id]
    );

    if (result.affectedRows <= 0) {
        throw new Error('El empleado no existe');
    }

    return result;
}

module.exports = {
    createEmployee,
    deleteEmployee,
    getAllEmployees,
    getEmployeeById,
    getEmployeesByNameAndTeam,
    updateEmployee,
}
