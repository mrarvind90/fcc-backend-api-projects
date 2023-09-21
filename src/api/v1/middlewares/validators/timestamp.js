import { checkSchema } from 'express-validator';

export const getTimestamp = checkSchema(
	{
		date: {
			customSanitizer: {
				options: (value) => (!value ? new Date() : !isNaN(value) ? new Date(parseInt(value)) : new Date(value)),
			},
			custom: {
				options: (value) => {
					if (value.toDateString() === 'Invalid Date') {
						throw new Error('Invalid Date');
					}

					return value;
				},
			},
		},
	},
	['params'],
);
