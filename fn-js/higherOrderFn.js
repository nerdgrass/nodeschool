// My initial solution
function repeat(operation, timesToRepeat) {
  if (typeof timesToRepeat !== 'number') {
    return new Error("Parameter 'timesToRepeat' must be a number")
  } else if (typeof operation !== 'function') {
    return new Error("Parameter 'operation' must be a function")
  } else {
    for (var i = 0; i < timesToRepeat+1; i ++) {
      operation.call()
    }
  }
}

// My revised solution
function repeatRevised(operation, timesToRepeat) {
  if (typeof timesToRepeat !== 'number') {
    return new Error("Parameter 'timesToRepeat' must be a number")
  } else if (typeof operation !== 'function') {
    return new Error("Parameter 'operation' must be a function")
  } else {
    if (timesToRepeat <= 0) return
    operation()
    return repeatRevised(operation, --timesToRepeat)
  }
}

module.exports = repeatRevised
