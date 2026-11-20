
# assert

A lightweight global assertion utility for TypeScript and JavaScript.

Install it once, import it into your application, and use `assert()` globally without repeatedly importing the function.

## Installation

```bash
npm install @lvcca/assert
```

## Usage

Import the package once in your application entry point:

```typescript
import "@lvcca/assert";
```

You can now use `assert()` globally:

```typescript
assert(true);  // Passes
assert(false); // Throws default Error: '[*] Assertion failed'
```

## TypeScript Support

This package includes global TypeScript declarations, providing type checking and autocomplete without manually importing the function.

```typescript
assert("hello"); // Valid

assert(123); // Valid

assert(null); // Valid
```

The function accepts any value and throws an error when the value is falsy.

## API

### `assert(condition: unknown): void`

Evaluates the provided condition.

| Parameter | Type | Description |
|---|---|---|
| `condition` | `unknown` | Value to evaluate |

**Behavior:**
- If the condition is truthy, execution continues.
- If the condition is falsy, an `Error` is thrown.

## Requirements

- Node.js or a compatible JavaScript runtime.
- TypeScript support (optional, for type declarations).

## License

MIT
