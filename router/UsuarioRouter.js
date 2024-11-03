import express from 'express';
const router = express.Router();
const usuarioController = require('../controller/UsuarioController');

router.get('/', usuarioController.list)
router.get('/:id', usuarioController.getById)
router.post('/', usuarioController.insert)
router.put('/:id', usuarioController.atualizar)
router.delete('/:id', usuarioController.deletar)

module.exports = router;

