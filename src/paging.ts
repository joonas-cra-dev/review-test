export function pages(total: number, size: number): number {
	return Math.ceil(total / size);
}
