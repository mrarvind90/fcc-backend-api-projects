import { service } from '../services';

export const getTimestamp = (req, res) => {
	const payload = service.timestamp.getFormattedDate(req.params.date);

	return res.status(200).json(payload);
};
