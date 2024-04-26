export const roundNumber = (num: number): number => {
	const remainder = num % 50;
	if (remainder >= 25) {
		return num + 50 - remainder;
	} else {
		return num - remainder;
	}
};
