import { checkSchema } from 'express-validator';

export const createNewUser = checkSchema(
	{
		username: {
			exists: {
				options: {
					values: 'null',
				},
				errorMessage: "'username' is a required field",
			},
		},
	},
	['body'],
);

export const addExerciseLogs = checkSchema(
	{
		_id: {
			in: ['params'],
			isMongoId: {
				errorMessage: (value) => `'${value}' is not a valid user id`,
			},
		},
		description: {
			in: ['body'],
			exists: {
				options: {
					values: 'null',
				},
				errorMessage: "'description' is a required field",
			},
			isString: {
				errorMessage: (value) => `"${value}" is not a valid value for 'description'"`,
			},
		},
		duration: {
			in: ['body'],
			exists: {
				options: {
					values: 'null',
				},
				errorMessage: "'duration' is a required field",
			},
			isInt: {
				options: {
					min: 1,
					allow_leading_zeroes: false,
				},
				errorMessage: "Invalid 'duration' value provided",
			},
		},
		date: {
			in: ['body'],
			customSanitizer: {
				options: (value) => (value ? new Date(value) : new Date()),
			},
			custom: {
				options: (value) => {
					if (value.toDateString() === 'Invalid Date') {
						throw new Error('Invalid date format provided');
					}

					return value;
				},
			},
		},
	},
	['params', 'body'],
);

export const getExerciseLogs = checkSchema(
	{
		_id: {
			in: ['params'],
			optional: false,
			isMongoId: {
				errorMessage: (value) => `'${value}' is not a valid user id`,
			},
		},
		from: {
			in: ['query'],
			optional: true,
			isDate: {
				options: {
					strictMode: true,
					format: 'yyyy-mm-dd',
				},
				errorMessage: (value) => `'${value}' is not a valid value for 'from' query parameter`,
			},
			toDate: true,
		},
		to: {
			in: ['query'],
			optional: true,
			isDate: {
				options: {
					strictMode: true,
					format: 'yyyy-mm-dd',
				},
				errorMessage: (value) => `'${value}' is not a valid value for 'from' query parameter`,
			},
			toDate: true,
		},
		limit: {
			in: ['query'],
			optional: true,
			isInt: {
				options: {
					min: 1,
				},
				errorMessage: "Invalid 'limit' value provided, value must at least be 1",
				bail: true,
			},
			toInt: true,
		},
	},
	['params', 'query'],
);
