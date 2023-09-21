const formatToUnixMsTimestamp = (date) => {
	console.log(date);
	return date.getTime();
};

const formatToUTCTimestamp = (date) => {
	return date.toUTCString();
};

export { formatToUnixMsTimestamp, formatToUTCTimestamp };
