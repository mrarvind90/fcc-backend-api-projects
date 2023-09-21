import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, align } = format;

const LOGGER_OPTIONS = {
	level: 'debug',
	format: combine(
		timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSSZ A' }),
		colorize({ all: true }),
		align(),
		printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
	),
	transports: [new transports.Console(), new transports.File({ filename: 'logs/app.log' })],
};

const logger = createLogger(LOGGER_OPTIONS);

export default logger;
