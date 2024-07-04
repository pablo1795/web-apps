const connection = require('../config/database.config');

const getAll = async () => {
  const [data] = await connection.query('SELECT * FROM ;')

  if (data.length === 0) return []

  return data
}

const getById = async ({ id }) => {
  const [data] = await connection.query(
    `SELECT * FROM quiz-user WHERE id = ?;`,
    [id]
  )

  if (data.length === 0) return null

  return data[0]
}

const create = async ({ input }) => {
  const {
    name,
    email,
    points,
    date,
  } = input

  try {
    await connection.query(
      `INSERT INTO quiz-user (name, email, points, date)
          VALUES ?, ?, ?, ?);`,
      [name, email, points, date]
    )
  } catch (e) {
    throw new Error('Error creating register')
  }
}

const remove = async ({ id }) => {
}

const update = async ({ id, input }) => {
}

module.exports = {
  create,
  remove,
  getAll,
  getById,
  update,
}