export const convertAmount = (num: number): string => {
	if (num >= 1000000) {
		const million = num / 1000000;
		return million.toLocaleString('en-US', { maximumFractionDigits: 6 });
	} else {
		return num.toLocaleString('en-US');
	}
};
