import { Router } from 'express';

import logger from '../../../config/logger.js';
import { handler } from '../middlewares/handlers/index.js';
import { controller } from '../controllers/index.js';

const router = Router();

router
	.route('/fileanalyse')
	.post(handler.file.uploadFile, controller.fileanalyse.uploadFile)
	.all((req, res) => {
		logger.error(`${req.method} is not allowed on ${req.path}`);
		res.status(405).json({ error: `${req.method} is not allowed on ${req.path}` });
	});

export default router;
