const express = require('express');
const router = express.Router();
const assetController = require('../controller/asset.controller');

router.get('/', assetController.getAllAssets);
router.get('/:id', assetController.getAssetById);
router.get('/:search', assetController.getAssetsBy);
router.post('/create_asset', assetController.createAsset);
router.put('/update_asset/:id', assetController.updateAsset);
router.delete('/delete_asset/:id', assetController.deleteAsset);

module.exports = router;
