import { json, Router, urlencoded } from 'express';

import validate from '../middlewares/validators/validator';
import { validator } from '../middlewares/validators';
import { addExerciseLogs } from '../middlewares/validators/users';
import { controller } from '../controllers';

const router = Router();

router
	.use(json())
	.route('/users')
	.post(validate([validator.user.createNewUser]), controller.users.createNewUser)
	.get(controller.users.getAllUsers);

router
	.use(json())
	.route('/users/:_id/exercises')
	.post(validate([addExerciseLogs]), controller.users.addExerciseLogs);

router
	.use(urlencoded({ extended: true }))
	.route('/users/:_id/logs')
	.get(validate([validator.user.getExerciseLogs]), controller.users.getExerciseLogs);

export default router;
