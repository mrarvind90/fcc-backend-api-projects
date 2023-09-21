import logger from '../../../config/logger.js';
import { service } from '../services/index.js';

export const createNewUser = async (req, res) => {
	const { username, _id } = await service.users.createNewUser(req.body.username);

	return res.status(201).json({ username, _id });
};

export const getAllUsers = async (req, res) => {
	const users = await service.users.getAllUsers();

	return res.status(200).json(users);
};

export const addExerciseLogs = async (req, res) => {
	const { username, _id, log } = await service.users.addExerciseLogs(req.params._id, req.body);
	const { description, duration, date } = log[log.length - 1];

	if (!_id) {
		const statusCode = 422;

		logger.error(
			`${statusCode} ${req.method} ${req.path} - Unable to add exercise log for user ${req.params._id} please check that the correct user ID is provided`,
		);

		return res.status(statusCode).json({
			error: `Unable to add exercise log for user ${req.params._id} please check that the correct user ID is provided`,
		});
	}

	return res.status(201).json({ username, _id, description, duration, date });
};

export const getExerciseLogs = async (req, res) => {
	const userExerciseLog = await service.users.getExerciseLogs(req.params._id, req.query);

	if (!userExerciseLog.length) {
		const statusCode = 422;

		logger.error(
			`${statusCode} ${req.method} ${req.path} - Unable to add exercise log for user ${req.params._id} please check that the correct parameters are provided`,
		);

		res.send(statusCode).json({
			error: `Unable to add exercise log for user ${req.params._id} please check that the correct parameters are provided`,
		});
	}

	//TODO: Improve this such that the date format can match toDateString from query side
	userExerciseLog[0].log = userExerciseLog[0].log.map((entry) => ({
		description: entry.description,
		duration: entry.duration,
		date: entry.date.toDateString(),
	}));

	res.status(200).json(userExerciseLog[0]);
};
