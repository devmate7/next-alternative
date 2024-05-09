/**
 * Generates cryptographically strong random string
 *
 * @author Felix C.
 * @param {BigInt} size The length in bytes with a positive integer of the random string that should be returned
 * @returns {string}
 */
export function token(size: BigInt): string {
	const hex = '0123456789abcdef';

	return crypto
		.getRandomValues(new Uint8Array(Number(size)))
		.reduce((token, value) => token + hex[value >> 4] + hex[value & 15], '');
}
