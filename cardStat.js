let cardStatArray = []

exports.findAll =  () => {
  return cardStatArray
}

exports.reset = () => {
  cardStatArray = []
  console.log('Reset Successfully!')
}

exports.findById = (id) => {
  for (var i = 0; i < cardStatArray.length; i++) {
    if (cardStatArray[i].id === id) return cardStatArray[i]
  }
}

exports.push = (card) => {
  console.log(`Pushing Done!\n${card.id}`)
  cardStatArray.push(card);
}

exports.getLast = () => {
  console.log(`send ${cardStatArray.length}`)
  return cardStatArray.length;
}

exports.removeById = (id) => {
  for(var i = 0; i < cardStatArray.length; i++) {
    if(cardStatArray[i].id === id) {
      cardStatArray.splice(i, 1);
    }
  }
}