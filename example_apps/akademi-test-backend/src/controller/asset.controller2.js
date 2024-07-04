const assetModel = require('../model/asset.model');

const getAllAssets = async (req, res) => {
  try {
    const result = await assetModel.getAllAssets();

    res.json({ message: 'GET ALL ASSETS', result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getAssetById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await assetModel.getAssetById(id);

    if (result.length === 0)
        return res.status(404).json({ message: "empleado no encontrado" });

    res.json({ message: 'GET ASSET BY ID', result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createAsset = async (req, res) => {
  const values = { ...req.body };
  const result = await assetModel.createAsset(values);
  const { idAsset } = result;
  const resultAsset = await assetModel.getAssetById(idAsset);

  res.json({ message: 'CREATE ASSET', result: resultAsset });
};

const updateAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const values = { ...req.body };
    const result = await assetModel.updateAsset(id, values);

    res.json({ message: 'UPDATE ASSET', result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await assetModel.deleteAsset(id);

    res.json({ message: 'DELETE ASSET', result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  createAsset,
  deleteAsset,
  getAllAssets,
  getAssetById,
  updateAsset,
}
