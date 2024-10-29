import express from 'express';
const router = express.Router();
import despesaController from '../controller/DespesasController.js';


router.get('/', despesaController.list)
router.get('/:id', despesaController.getById)
router.post('/', despesaController.insert)
router.put('/:id', despesaController.atualizar)
router.delete('/:id', despesaController.deletar)


export default router;