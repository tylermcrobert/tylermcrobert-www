export function getAspect(aspect: string): number {
	return aspect
		.split(':')
		.map((num) => parseInt(num))
		.reduce((a, b) => a / b);
}
