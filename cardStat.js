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

exports.starCheck = (id, fav) => {
  for (var i = 0; i < cardStatArray.length; i++) {
    if (cardStatArray[i].id === id) {
      cardStatArray[i].fav = fav;
      console.log(`done set fav to ${cardStatArray[i].fav} id ${id}`);
    }
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