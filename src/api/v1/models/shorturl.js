import mongoose from 'mongoose';

const URLSchema = mongoose.Schema(
	{
		original_url: {
			required: true,
			type: String,
			trim: true,
		},
		short_url: {
			type: Number,
			required: false,
		},
	},
	{
		collection: 'shorturls',
		timestamps: true,
		query: {
			byOriginalUrl(originalUrl) {
				return this.where({ original_url: originalUrl });
			},
			byShortURLId(shortUrlId) {
				return this.where({ short_url: shortUrlId });
			},
		},
	},
);

export const shorturl = mongoose.model('URL', URLSchema);
