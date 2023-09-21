import { Router } from 'express';
import logger from '../../../config/logger';
import { controller } from '../controllers';

const router = Router();

router.get('/whoami', controller.whoami.getFormattedReqHeaders);

// Method Not Allowed handling
router.all('/whoami', (req, res) => {
	logger.error(`${req.method} is not allowed on ${req.path}`);
	res.status(405).json({ error: `${req.method} is not allowed on ${req.path}` });
});

export default router;
