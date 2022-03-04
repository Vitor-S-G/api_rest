import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index);// Lista usuários
// router.get('/:id', userController.show); // Lista um usuario

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários -> GETas
store -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
