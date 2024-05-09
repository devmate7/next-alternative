export function serialize(_: string, value: unknown) {
	return typeof value === 'bigint' ? Number(value) : value;
}
