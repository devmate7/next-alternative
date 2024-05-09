export function sleep(ms: BigInt) {
	return new Promise(resolve => setTimeout(resolve, Number(ms)));
}
