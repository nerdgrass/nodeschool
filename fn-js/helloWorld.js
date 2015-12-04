function upperCaseString(input) {
  if (typeof input === 'string') {
    return input.toUpperCase()
  } else {
    return new Error("Input not a string")
  }
}

module.exports = upperCaseString
