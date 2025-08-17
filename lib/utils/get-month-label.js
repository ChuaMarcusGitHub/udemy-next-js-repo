const monthValueMap = {
	1: 'Jan',
	2: 'Feb',
	3: 'Mar',
	4: 'Apr',
	5: 'May',
	6: 'June',
	7: 'Jul',
	8: 'Aug',
	9: 'Sep',
	10: 'Oct',
	11: 'Nov',
	12: 'Dec',
};

export const getMonthLabel = (numMonth) => {
	if (numMonth < 1 && numMonth > 12) return monthValueMap['1'];

	return monthValueMap[`${numMonth}`];
};
