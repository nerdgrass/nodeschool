function getShortMsgs(msgArray) {
  var shortMsgArray = []
  function checkMsgLength(message) {
    if (message.length < 50) {
      return message
    }
  }
  msgArray.map(function(msgObj) {
    shortMsgArray.push(msgObj.message)
  })
  shortMsgArray = shortMsgArray.filter(checkMsgLength)
  return shortMsgArray
}

module.exports = getShortMsgs

// nodeschool solution - note the way filter and map are chained to return
// statement. Much more concise formatting, much more functional style.
function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}
