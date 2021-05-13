const express = require('express');
const { route } = require('.');
const router = express.Router();
const controller = require('../controllers/animalController');

router.get('/', controller.get);
router.post('/:nome', controller.post);
router.put('/:id/:novoNome', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;