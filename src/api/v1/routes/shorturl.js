import { json, Router, urlencoded } from 'express';

import logger from '../../../config/logger';
import validate from '../middlewares/validators/validator';
import { validator } from '../middlewares/validators';
import { controller } from '../controllers';

const router = Router();

router
	.use(json())
	.route('/shorturl')
	.post(validate([validator.shorturl.findOrCreateShortUrl]), controller.shorturl.findOrCreateShortUrl)
	.all((req, res) => {
		logger.error(`${req.method} is not allowed on ${req.path}`);
		res.status(405).json({ error: `${req.method} is not allowed on ${req.path}` });
	});

router
	.use(urlencoded({ extended: true }))
	.route('/shorturl/:id')
	.get(controller.shorturl.redirectToShortUrl)
	.all((req, res) => {
		logger.error(`${req.method} is not allowed on ${req.path}`);
		res.status(405).json({ error: `${req.method} is not allowed on ${req.path}` });
	});

export default router;
