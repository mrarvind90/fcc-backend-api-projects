import { checkSchema } from 'express-validator';

export const findOrCreateShortUrl = checkSchema(
	{
		url: {
			exists: {
				options: {
					values: 'null',
				},
				errorMessage: "'url' is a required field",
			},
			isURL: {
				options: {
					protocols: ['http', 'https'],
					require_protocol: true,
				},
				errorMessage: 'invalid url',
			},
		},
	},
	['body'],
);
