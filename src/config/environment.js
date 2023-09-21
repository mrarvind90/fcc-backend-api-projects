import 'dotenv/config';

// TODO: Extend this environment configuration to support spinning up the application on multiple environments
const env = {
	PORT: process.env.PORT || 3000,
	MONGODB_ATLAS_URI: process.env.MONGODB_ATLAS_URI,
};

export default env;
