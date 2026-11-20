export {};

declare global {
    var assert: <T>(
        condition: T,
        msg?: string
    ) => asserts condition;
}
