const model = require('../model/jsquiz.model');

const getAll = async (req, res) => {
  try {
    const result = await model.getAll();

    res.json({ message: 'GET ALL', result: result });
  } catch (error) {
    res.status(500).json({ message: 'GET ALL NOT FOUND', result: [] });
  }
}

const getById = async (req, res) => {
  try {
    const dataId = req.params.id;
    const result = await model.getById(dataId);

    if (!result) {
      res.status(404).json({ message: 'GET BY ID NOT FOUND' });
      return;
    }

    res.json({ message: 'GET BY ID', result: result });
  } catch (error) {
    res.status(500).json({ message: 'GET BY ID NOT FOUND', result: {} });
  }
}

const create = async (req, res) => {
  try {
    const data = req.body;
    const result = await model.create(data);
    res.status(201).json({ message: 'POST', result: result });
  } catch (error) {
    res.status(500).json({ message: 'POST NOT FOUND', result: {} });
  }
}

const update = async (req, res) => {
  try {
    const dataId = req.params.id;
    const result = await model.update(dataId, req.body);

    if (!result) {
      res.status(404).json({ message: `PUT BY ID NOT FOUND` });
      return;
    }

    res.json({ message: 'PUT', result: result });
  } catch (error) {
    res.status(500).json({ message: 'PUT NOT FOUND', result: {} });
  }
}

const remove = async (req, res) => {
  try {
    const { dataId } = req.params;
    const result = await model.remove(dataId);

    res.json({ message: 'DELETE', result });
  } catch (error) {
    res.status(500).json({ message: 'REMOVE NOT FOUND' });
  }
}

module.exports = {
  create,
  remove,
  getAll,
  getById,
  update,
}