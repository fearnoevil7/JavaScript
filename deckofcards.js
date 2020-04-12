
class Card {
    constructor(suit, stringValue, numericalValue) {
        this.suit = suit;
        this.stringValue = stringValue;
        this.numericalValue = numericalValue;
        this.showCard = function () {
            console.log(`${this.suit}; ${this.stringValue}; ${this.numericalValue}`)
        }
    }
}
class Deck {
    constructor() {
        this.allCards = [];
        this.suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
        this.stringValue = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        this.numericalValue = ["1", "2", "3", "4", "5", "6", "7" ,"8" , "9", "10", "11", "12", "13"]
        this.addCard = function(){
            for (var suit = 0; suit < this.suits.length; suit++){
                for(var value = 0; value < this.stringValue.length; value++){
                    const card1 = new Card(this.suits[suit], this.stringValue[value], this.numericalValue[value])
                    this.allCards.push(card1);
                }
            }
        };
        this.addCard();
    }
    shuffle (deck){
        var randomCardLocation, temp, currentCardLocation;
        for( currentCardLocation = deck.length-1; currentCardLocation > 0; currentCardLocation--){
            var randomCardLocation = Math.floor(Math.random() * (currentCardLocation + 1));
            var temp = deck[currentCardLocation];
            deck[currentCardLocation] = deck[randomCardLocation];
            deck[randomCardLocation] = temp;
        }
        this.allCards = deck
        return this.allCards;
    }
    reset (){
        this.allCards = [];
        this.addCard();
    }
    dealCards(deck, numofCardsDealt){
        var playersHand = [];
        for(var cardsdealt = 0; cardsdealt < numofCardsDealt; cardsdealt++){
            var currentDeck = deck.length-1;
            var card = Math.floor(Math.random() * currentDeck)
            playersHand.push(deck[card]);
            deck.splice(card, 1)
        }
        return playersHand
    }
}
class Player {
    constructor(name, hand) {
        this.name = name;
        this.hand = hand;
    }
    takeCard(deck, cardsDealt){
        this.hand = this.hand.concat(deck.dealCards(deck.allCards, cardsDealt))
    }
    discardCard(hand, index){
        this.hand - hand.splice(index, 1)
    }
}
const deck1 = new Deck()
console.log(deck1.allCards);
deck1.shuffle(deck1.allCards);
console.log(deck1.allCards);
deck1.reset(deck1.allCards);
console.log(deck1.allCards);
console.log(deck1.dealCards(deck1.allCards, 34))
console.log(deck1);
const jonathon = new Player("Jonathon", deck1.dealCards(deck1.allCards, 7))
console.log(jonathon)
jonathon.takeCard(deck1, 9);
console.log(jonathon.hand)
jonathon.discardCard(jonathon.hand, 0)
console.log(jonathon.hand)
