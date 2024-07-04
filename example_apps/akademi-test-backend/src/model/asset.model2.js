const connection = require('../config/db.config');

const getAllAssets = async () => {
    const sql = `SELECT * FROM asset`;
    const rows = await connection.query(sql).spread((rows) => rows);
    return rows;
};

const getAssetById = async (id) => {
    const rows = await connection.query(
        `SELECT * FROM asset WHERE _id = ?`,
        [id]
    ).spread(rows => rows);

    // if (rows.length <= 0)
    //     return res.status(404).json({ message: "activo no encontrado" });
    return rows.length > 0 ? rows[0] : []
}

const createAsset = async (values) => {
    const { name, type, code, marca, description, purchase_date } = values;
    const result = await connection.query(
        `INSERT INTO asset (name, type, code, marca, description, purchase_date) VALUES (?, ?, ?, ?, ?, ?)`,
        ['name', 'type', 'code', 'marca', 'description', 'purchase_date']
    ).spread((rows) => rows);

    return result;
}

const updateAsset = async (id, values) => {
    const { name, type, code, marca, description, purchase_date } = values;
    const [result] = await connection.query(
        `UPDATE asset SET first_name = IFNULL(?, first_name), last_name = IFNULL(?, last_name), cuit = IFNULL(?, cuit), team_id = IFNULL(?, team_id), join_date = IFNULL(?, join_date), rol = IFNULL(?, rol) WHERE _id = ?`,
        [name, type, code, marca, description, purchase_date, id]
    );

    if (result.affectedRows === 0)
        return res.status(404).json({ message: "el activo no existe" });

    const rows = await connection.query(
        `SELECT * FROM asset WHERE _id = ?`,
        [id]
    );

    return rows[0];
}

const deleteAsset = async (id) => {
    const result = await connection.query(
        `DELETE FROM asset WHERE _id = ?`,
        [id]
    ).spread((rows) => rows);

    if (rows.affectedRows <= 0)
        return res.status(404).json({ message: "el activo no existe" });
    // return rows.length > 0 ? rows[0] : []

    return result;
}

module.exports = {
    createAsset,
    deleteAsset,
    getAllAssets,
    getAssetById,
    updateAsset,
}
