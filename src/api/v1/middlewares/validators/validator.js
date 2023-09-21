import { validationResult } from 'express-validator';

import logger from '../../../../config/logger.js';

// TODO: To be deprecated in favor of a custom sanitizer, validation chain and context runner
const validationResultWithMessage = validationResult.withDefaults({
	formatter: (error) => ({ error: error.msg }),
});

const validate = (validationRules) => {
	return async (req, res, next) => {
		await Promise.all(validationRules.map((validationRule) => validationRule.run(req)));
		const result = validationResultWithMessage(req);

		if (!result.isEmpty()) {
			const statusCode = 422;

			logger.error(
				`${statusCode} ${req.method} ${req.path}${' ' + JSON.stringify(req.body) || ''} - ${
					result.array()[0].error
				}`,
			);

			// For the purposes of FCC project, we only return the first error message each time
			return res.status(statusCode).json(result.array()[0]);
		}

		return next();
	};
};

export default validate;
