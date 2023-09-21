import mongoose from 'mongoose';

const LogSubSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	description: {
		required: true,
		type: String,
		trim: true,
	},
	duration: {
		required: true,
		type: Number,
		min: 1,
	},
	date: {
		required: true,
		type: Date,
		get: (date) => date.toDateString(),
	},
});

const UsersSchema = mongoose.Schema(
	{
		username: {
			required: true,
			type: String,
		},
		log: {
			required: false,
			type: [LogSubSchema],
		},
	},
	{
		collection: 'users',
		timestamps: true,
	},
);

export const users = mongoose.model('Users', UsersSchema);
