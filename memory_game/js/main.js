
const cards = ['queen', 'queen', 'king', 'king']; 
const cardsInPlay = [];

const cardOne = cards[0]; 
cardsInPlay.push(cards[0]); 

const cardTwo = cards[2]; 
cardsInPlay.push(cards[2]); 


if (cardsInPlay[0] === cardsInPlay[1]){
	alert ('you found a match');
} else {
	alert ('soz pal');	
}




console.log ("User flipped " + cardTwo); 
console.log ("User flipped " + cardOne); 
 