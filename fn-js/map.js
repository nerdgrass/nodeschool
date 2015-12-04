// Convert this to a map-based function:
// function doubleAll(numbers) {
//   var result = []
//   for (var i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2)
//   }
//   return result
// }

function doubleAllInArray(numbersArray) {
  var doubledArray = []
  function doubleArrayItem(arrayItem) {
    if (typeof arrayItem === 'number') {
      doubledArray.push(arrayItem * 2)
    }
  }
  numbersArray.map(doubleArrayItem)
  
  return doubledArray
}

module.exports = doubleAllInArray
