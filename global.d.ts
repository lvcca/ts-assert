export {}

declare global {
  var assert:(
    condition: boolean,
    msg?: string
  ) => asserts condition is true
}

