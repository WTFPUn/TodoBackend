let cardStatArray = []

exports.findAll =  () => {
  let priorityStatAray = [], StarArray = [], unStarArray = [];
  for(var i = 0; i < cardStatArray.length; i++)
    cardStatArray[i].fav === 1 ?   StarArray.push(cardStatArray[i]) : unStarArray.push(cardStatArray[i]);
  return priorityStatAray.concat(StarArray.slice(0).reverse(), unStarArray.slice(0).reverse());
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