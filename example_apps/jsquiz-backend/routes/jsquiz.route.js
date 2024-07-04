const express = require('express');
const router = express.Router();
const jsquizController = require('../controller/quiz.controller');

router.get('/', jsquizController.getAll);
router.get('/:id', jsquizController.getById);
router.post('/create', jsquizController.create);
router.put('/update/:id', jsquizController.update);
router.delete('/delete/:id', jsquizController.remove);

module.exports = router;