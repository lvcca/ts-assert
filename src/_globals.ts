function assert(
    condition: unknown,
    msg?: string,
): asserts condition is true {
    if (!condition) throw new Error(msg || '[*] Assertion failed');
}

globalThis.assert = assert;
