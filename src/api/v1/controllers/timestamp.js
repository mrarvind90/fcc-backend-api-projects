import { service } from '../services/index.js';

export const getTimestamp = (req, res) => {
	const payload = service.timestamp.getFormattedDate(req.params.date);

	return res.status(200).json(payload);
};
