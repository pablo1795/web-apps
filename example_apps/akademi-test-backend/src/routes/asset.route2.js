const express = require('express');
const router = express.Router();
const employeeController = require('../controller/asset.controller');

router.get('/', employeeController.getAllAssets);
router.get('/:id', employeeController.getAssetById);
router.post('/', employeeController.createAsset);
router.put('/:id', employeeController.updateAsset);
router.delete('/:id', employeeController.deleteAsset);

module.exports = router;
