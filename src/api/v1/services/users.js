import mongoose from 'mongoose';

import { model } from '../models/index.js';

export const createNewUser = async (username) => {
	return await model.users.create({ username });
};

export const getAllUsers = async () => {
	return await model.users.find({}).select({ username: 1, _id: 1 }).exec();
};

export const addExerciseLogs = async (_id, { description, duration, date }) => {
	return await model.users
		.findByIdAndUpdate(
			{ _id },
			{ $push: { log: { description, duration, date } } },
			{ new: true, select: { username: 1, _id: 1, log: 1 } },
		)
		.exec();
};

export const getExerciseLogs = async (_id, { from, to, limit }) => {
	const pipeline = [
		{ $match: { _id: new mongoose.Types.ObjectId(_id) } },
		{ $unwind: '$log' },
		{ $match: { 'log.date': { $gte: from || new Date(0), $lte: to || new Date() } } },
		{ $limit: limit || 10 },
		{ $group: { _id, username: { $first: '$username' }, count: { $sum: 1 }, log: { $push: '$log' } } },
	];

	return await model.users.aggregate(pipeline).exec();
};
