const model = require('../model/tasks.model');

const getAll = async (req, res) => {
  try {
    const data = await model.getAll();

    res.json({ message: 'GET ALL', result: data });
  } catch (error) {
    res.status(500).json({ message: 'GET ALL NOT FOUND', result: [] });
  }
}

const getById = async (req, res) => {
  try {
    const dataId = req.params.id;
    const data = await model.getById(dataId);

    if (!data) {
      res.status(404).json({ message: 'GET BY ID NOT FOUND' });
      return;
    }

    res.json({ message: 'GET BY ID', result: data });
  } catch (error) {
    res.status(500).json({ message: 'GET BY ID NOT FOUND', result: {} });
  }
}

const create = async (req, res) => {
  try {
    const newData = req.body;
    const data = await model.create(newData);
    res.status(201).json({ message: 'POST', result: data });
  } catch (error) {
    res.status(500).json({ message: 'POST NOT FOUND', result: {} });
  }
}

const update = async (req, res) => {
  try {
    const dataId = req.params.id;
    const data = await model.update(dataId, req.body);

    if (!data) {
      res.status(404).json({ message: 'PUT BY ID NOT FOUND' });
      return;
    }

    res.json({ message: 'PUT', result: data });
  } catch (error) {
    res.status(500).json({ message: 'PUT NOT FOUND', result: {} });
  }
}

const remove = async (req, res) => {
  try {
    const dataId = req.params.id;
    const data = await model.remove(dataId);
    if (!data) {
      res.status(404).json({ message: 'DELETE BY ID NOT FOUND' });
      return;
    }

    res.json({ message: 'DELETE', result: data });
  } catch (error) {
    res.status(500).json({ message: 'DELETE NOT FOUND', result: {} });
  }
}

module.exports = {
  create,
  remove,
  getAll,
  getById,
  update,
}
