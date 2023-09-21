import { formatToUnixMsTimestamp, formatToUTCTimestamp } from '../helpers/timestamp-utils';

export const getFormattedDate = (date) => {
	return {
		unix: formatToUnixMsTimestamp(date),
		utc: formatToUTCTimestamp(date),
	};
};
