const monthValueMap = {
	'01': 'Jan',
	'02': 'Feb',
	'03': 'Mar',
	'04': 'Apr',
	'05': 'May',
	'06': 'June',
	'07': 'Jul',
	'08': 'Aug',
	'09': 'Sep',
	10: 'Oct',
	11: 'Nov',
	12: 'Dec',
};

export const getMonthLabel = (month) => {
	const numMonth = Number(month.replace(/^0+/, ''));
	if (numMonth < 1 && numMonth > 12) return monthValueMap['01'];

	return monthValueMap[month];
};
