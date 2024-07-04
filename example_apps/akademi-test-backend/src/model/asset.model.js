const connection = require('../config/db.config');

const getAllAssets = async (limit = 20) => {
    const [rows] = await connection.query(`SELECT * FROM asset ORDER BY _id DESC LIMIT ${limit}`);

    return rows.length > 0 ? rows : [];
}

const getAssetById = async (id) => {
    const rows = await connection.query(
        `SELECT * FROM asset WHERE _id = ?`,
        [id]
    ).spread(rows => rows);

    return rows[0]
}

const getAssetsBy = async (name, type, page = 1, size = 20) => {
    const startIndex = (page - 1) * size;
    const limit = size;

    const [rows] = await connection.query(
        'SELECT * FROM asset WHERE name LIKE ? AND type LIKE ? LIMIT ?, ?',
        [`%${name}%`, `%${type}%`, startIndex, limit]
    );

    return rows;
}

const createAsset = async (values) => {
    const { name, type } = values;

    if (!name || !type) {
        throw new Error('Los campos nombre y tipo son obligatorios');
    }

    const valuesArray = Object.values(values);

    const result = await connection.query(
        `INSERT INTO asset (name, type, code, marca, description, purchase_date) VALUES (?, ?, ?, ?, ?, ?)`,
        valuesArray
    );

    return result;
}

const updateAsset = async (id, values) => {
    const { name, type, code, marca, description, purchase_date } = values;

    const [result] = await connection.query(
        `UPDATE asset SET name = ?, type = ?, code = ?, marca = ?, description = ?, purchase_date = ? WHERE _id = ?`,
        [name, type, code, marca, description, purchase_date, id]
    );

    if (result.affectedRows === 0) {
        throw new Error('El activo no existe');
    }

    const [rows] = await connection.query(
        `SELECT * FROM asset WHERE _id = ?`,
        [id]
    );

    return rows[0];
}

const deleteAsset = async (id) => {
    const result = await connection.query(
        `DELETE FROM asset WHERE _id = ?`,
        [id]
    );

    if (result.affectedRows <= 0) {
        throw new Error('El activo no existe');
    }

    return result;
}

module.exports = {
    createAsset,
    deleteAsset,
    getAllAssets,
    getAssetById,
    getAssetsBy,
    updateAsset,
}
