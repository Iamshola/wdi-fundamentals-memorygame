//Array of Cards
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'memory_game/img/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'memory_game/img/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'memory_game/img/king-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'memory_game/img/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'memory_game/img/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'memory_game/img/king-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'memory_game/img/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'memory_game/img/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'memory_game/img/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'memory_game/img/king-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'memory_game/img/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'memory_game/img/king-of-diamonds.png'
  }
]

var cardsInPlay = []
let delay = 500

var checkForMatch = function() {
  // cardElement.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay[0] === cardsInPlay[1]){
    setTimeout(match, delay)
  } else {
    setTimeout(lost, delay)
  }
}

var flipCard = function() {
  var cardId = this.getAttribute('data-id')
  this.setAttribute('src', cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank)
  if (cardsInPlay.length === 2) {
    checkForMatch()
  }
}

var createBoard = function(){
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img')
    cardElement.setAttribute('src','memory_game/img/back.png')
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener('click', flipCard)
    document.getElementById('game-board').appendChild(cardElement)
  }
}

// /runs above code to play game
createBoard()


function match(){
  alert('You found a match')
  document.getElementById('game-board').innerHTML = ''
  cardsInPlay = []
  createBoard()

}

function lost(){
  alert('Sorry, try again')
  document.getElementById('game-board').innerHTML = ''
  cardsInPlay = []
  createBoard()

}


//Allows user to restart game
function reset(){
  document.getElementById('game-board').innerHTML = ''
  cardsInPlay = []
  createBoard()
}
