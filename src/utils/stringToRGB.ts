export const stringToRGB = (str: string): string => {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}

	const color = Math.abs(hash) % 16777216;
	let r = (color >> 16) & 255;
	let g = (color >> 8) & 255;
	let b = color & 255;

	const threshold = 80;
	const brightness = r * 0.299 + g * 0.587 + b * 0.114;
	if (brightness > threshold) {
		const adjustment = brightness - threshold;
		const total = r + g + b;
		r = Math.max(0, r - Math.round((r / total) * adjustment));
		g = Math.max(0, g - Math.round((g / total) * adjustment));
		b = Math.max(0, b - Math.round((b / total) * adjustment));
	}

	return `rgb(${r}, ${g}, ${b})`;
};
