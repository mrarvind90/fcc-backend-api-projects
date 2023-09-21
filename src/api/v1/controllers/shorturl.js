import { service } from '../services/index.js';

export const findOrCreateShortUrl = async (req, res) => {
	const { original_url, short_url } = await service.shorturl.findOrCreateShortUrl(req.body.url);

	return res.status(200).json({
		original_url,
		short_url,
	});
};

export const redirectToShortUrl = async (req, res) => {
	const { id } = req.params;
	const url = await service.shorturl.getOriginalUrlFromShortUrl(id);

	if (!url) {
		return res.status(404).json({ error: `No short_url found matching the id ${id}` });
	}

	return res.redirect(302, url.original_url);
};
