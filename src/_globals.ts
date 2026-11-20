function assert<T extends boolean>(
	condition: T,
	msg?: string,
): asserts condition is T & true {
	if (!condition) throw new Error(msg || '[*] Assertion failed');
}

globalThis.assert = assert;
