export const getFormattedReqHeaders = (headers) => {
	const { 'x-forwarded-for': ipaddress, 'accept-language': language, 'user-agent': software } = headers;

	return {
		ipaddress,
		language,
		software,
	};
};
