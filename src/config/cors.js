const WHITELISTED_DOMAINS = [
	'https://narrow-plane.gomix.me',
	'https://www.freecodecamp.com',
	'http://localhost:3000',
	'http://127.0.0.1:3000',
];

const CORS_OPTIONS = {
	origin: (origin, callback) => {
		if (!origin || WHITELISTED_DOMAINS.includes(origin)) {
			return callback(null, true);
		}

		return callback(new Error('Not allowed by CORS'));
	},
	optionsSuccessStatus: 200,
};

export default CORS_OPTIONS;
