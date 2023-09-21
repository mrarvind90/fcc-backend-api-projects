import { model } from '../models';

export const findOrCreateShortUrl = async (originalUrl) => {
	let shortUrl = await model.shorturl.findOne().byOriginalUrl(originalUrl).exec();

	// The auto increment function on short_url field is done according to the
	// documentation https://www.mongodb.com/basics/mongodb-auto-increment
	// which is based on insert trigger, this seems to be a better approach than
	// having to handle a separate counter schema to manage the seq_value
	// In reality it is similar to what MongoDB is doing with a counter schema anyway, but it is
	// handled by the MongoDB event triggers
	if (!shortUrl) {
		const newDoc = await model.shorturl.create({ original_url: originalUrl });
		shortUrl = await model.shorturl.findById({ _id: newDoc._id });
	}

	return shortUrl;
};

export const getOriginalUrlFromShortUrl = async (shortUrlId) => {
	return await model.shorturl.findOne().byShortURLId(shortUrlId).exec();
};
