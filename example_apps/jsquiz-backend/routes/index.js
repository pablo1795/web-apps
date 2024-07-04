var express = require('express');
var router = express.Router();
const jsquizRoutes = require('./jsquiz.route');

router.use("/jsquiz", jsquizRoutes);

module.exports = router;