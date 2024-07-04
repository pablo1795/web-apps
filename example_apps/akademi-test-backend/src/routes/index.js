var express = require('express');
var router = express.Router();
const employeesRoutes = require('./employees.route');
const assetRoutes = require('./asset.route');

router.use("/employees", employeesRoutes);
router.use("/asset", assetRoutes);

module.exports = router;
