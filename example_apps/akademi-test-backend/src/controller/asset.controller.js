const assetModel = require('../model/asset.model');

const getAllAssets = async (req, res) => {
  try {
    const assets = await assetModel.getAllAssets();

    res.json({ message: 'GET ALL ASSET', result: assets });
  } catch (error) {
    res.status(500).json({ message: 'GET ALL ASSET NOT FOUND, no tienes activos 😢', result: [] });
  }
}

const getAssetById = async (req, res) => {
  try {
    const assetId = req.params.id;
    const asset = await assetModel.getAssetById(assetId);

    if (!asset) {
      res.status(404).json({ message: `GET ASSET BY ID ${assetId} NOT FOUND` });
      return;
    }

    res.json({ message: 'GET ASSET BY ID', result: asset });
  } catch (error) {
    res.status(500).json({ message: 'GET ASSET BY ID NOT FOUND', result: {} });
  }
}

const getAssetsBy = async (req, res) => {
  try {
    const { first_name, team_id, page, size } = req.query;
    const assets = await assetModel.getAssetsBy(first_name, team_id, page, size);

    res.json({ message: 'GET assetS BY NAME AND TEAM', result: assets });
  } catch (error) {
    res.status(500).json({ message: 'GET ASSET BY NAME AND TEAM NOT FOUND', result: [] });
  }
}

const createAsset = async (req, res) => {
  try {
    const newAsset = req.body;
    const createdAsset = await assetModel.createAsset(newAsset);
    res.status(201).json({ message: 'POST ASSET', result: createdAsset });
  } catch (error) {
    res.status(500).json({ message: 'POST ASSET NOT FOUND', result: {} });
  }
}

const updateAsset = async (req, res) => {
  try {
    const assetId = req.params.id;
    const updatedAsset = await assetModel.updateAsset(assetId, req.body);

    if (!updatedAsset) {
      res.status(404).json({ message: `PUT ASSET BY ID ${assetId} NOT FOUND` });
      return;
    }

    res.json({ message: 'PUT ASSET', result: updatedAsset });
  } catch (error) {
    res.status(500).json({ message: 'PUT ASSET NOT FOUND', result: {} });
  }
}

const deleteAsset = async (req, res) => {
  try {
    const assetId = req.params.id;
    const deletedAsset = await assetModel.deleteAsset(assetId);
    if (!deletedAsset) {
      res.status(404).json({ message: `PUT ASSET BY ID ${assetId} NOT FOUND` });
      return;
    }

    res.json({ message: 'DELETE ASSET', result: deletedAsset });
  } catch (error) {
    res.status(500).json({ message: 'DELETE ASSET NOT FOUND', result: {} });
  }
}

module.exports = {
  createAsset,
  deleteAsset,
  getAllAssets,
  getAssetById,
  getAssetsBy,
  updateAsset,
}
