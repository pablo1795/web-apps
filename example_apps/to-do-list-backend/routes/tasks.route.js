const express = require('express');
const router = express.Router();
const controller = require('../controller/tasks.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/create', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.remove);

module.exports = router;
