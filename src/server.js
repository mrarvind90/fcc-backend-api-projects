import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import DB_OPTIONS from './config/database.js';
import CORS_OPTIONS from './config/cors.js';
import logger from './config/logger.js';
import { route } from './api/v1/routes/index.js';

// Initialise express server
const app = express();

// Initialise database connection
mongoose
	.connect(process.env.MONGODB_ATLAS_URI, DB_OPTIONS)
	.then(() => {
		logger.info('Connected to MongoDB');
	})
	.catch((error) => {
		logger.error(`Error: "${error}" encountered when attempting to connect to MongoDB"`);
	});

// CORS configuration
app.use(cors(CORS_OPTIONS));

// Routers
app.use('/api', route.whoami);
app.use('/api', route.shorturl);
app.use('/api', route.users);
app.use('/api', route.fileanalyse);
app.use('/api', route.timestamp); // Putting the date route at the very last as the optional param causes it to get matched

// Resource not found handling
app.all('*', (req, res) => {
	const statusCode = 404;

	logger.error(`${req.method} ${req.path} ${statusCode}`);
	res.status(statusCode).json({ error: 'Not Found' });
});

// Bad request handling
app.use((err, req, res, next) => {
	const statusCode = 400;

	logger.error(`${req.method} ${req.path} returned ${statusCode} with error "${err}"`);
	res.status(400).json({ error: `${err}` });
});

// Server
app.listen(process.env.PORT, () => {
	logger.info(`Application started and listening at port ${process.env.PORT}`);
});
