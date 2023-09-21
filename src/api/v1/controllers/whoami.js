import { service } from '../services/index.js';

export const getFormattedReqHeaders = (req, res) => {
	const { ipaddress, language, software } = service.whoami.getFormattedReqHeaders(req.headers);

	return res.status(200).json({ ipaddress: ipaddress || req.socket.remoteAddress, language, software });
};
