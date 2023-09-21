import { Router, urlencoded } from 'express';

import logger from '../../../config/logger.js';
import validate from '../middlewares/validators/validator.js';
import { validator } from '../middlewares/validators/index.js';
import { controller } from '../controllers/index.js';

const router = Router();

router
	.use(urlencoded({ extended: true }))
	.route('/:date?')
	.get(validate([validator.timestamp.getTimestamp]), controller.timestamp.getTimestamp)
	.all((req, res) => {
		logger.error(`${req.method} is not allowed on ${req.path}`);
		res.status(405).json({ error: `${req.method} is not allowed on ${req.path}` });
	});

export default router;
