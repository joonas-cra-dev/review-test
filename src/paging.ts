export function pages(total: number, size: number): number {
	return Math.floor(total / size);
}
