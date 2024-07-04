var express = require('express');
var router = express.Router();
const routes = require('./tasks.route');

router.use("/tasks", routes);

module.exports = router;
