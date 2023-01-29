class Deck {
    constructor() {
      this.deck = [];
    }
  
    createDeck() {
      const suits = [':clubs:', ':diamonds:', ':hearts:', ':spades:'];
      const ranks = [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K'
      ]
  
      for (var suitCounter = 0; suitCounter < suits.length; suitCounter++) {
        for (var rankCounter = 0; rankCounter < ranks.length; rankCounter++) {
            let card = new Card(rankCounter + 1, ranks[rankCounter], suits[suitCounter])
          this.deck.push(card)
        }
      } 
    }

    shuffleDeck() {
        const deckX = this.deck;

            for (let i = deckX.length -1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = deckX[i];
                deckX[i] = deckX[j];
                deckX[j] = temp; 
            } 
            return deckX; 
    }
  }


class Game {
    constructor() {} 

    playGame() {

        const deck = new Deck();
        deck.createDeck();
      
        deck.shuffleDeck();
        let playerX = new Player(deck.deck.splice(0, 26), "Player X", 0); 
        let playerY = new Player(deck.deck, "Player Y", 0);
        for(let i = 0; i < playerX.hand.length; i++) {
            
            if(playerX.hand[i].value > playerY.hand[i].value) {
                playerX.score = playerX.score + 1;
                console.log("Player X wins this round!");
                console.log("Player X Score: " + playerX.score + "  Player Y Score: " + playerY.score);
                console.log(`
                `);
            } else if (playerY.hand[i].value > playerX.hand[i].value) {
                playerY.score = playerY.score + 1;
                console.log("Player Y wins this round!");
                console.log("Player X Score: " + playerX.score + "  Player Y Score: " + playerY.score);
                console.log(`
                `);
            } else {
                console.log("Players tie- No points awarded.");
                console.log("Player X Score: " + playerX.score + "  Player Y Score: " + playerY.score);
                console.log(`
                `);
            }
        }
        if(playerX.score > playerY.score) {
            console.log(`
            Player X Wins!`);
        } else if (playerY.score > playerX.score) {
            console.log(`
            Player Y Wins the Game!`);
        } else {
            console.log(`
            Tie! No wins :(`);
        }
    }
}
class Player {
    constructor(hand, name, score) {
        this.hand = hand;
        this.name = name;
        this.score = score; 
    }
}
  class Card{
        constructor(value, rank, suit) {
            this.value= value;
            this.rank = rank;
            this.suit = suit;
        }
  }

const deck = new Deck();
  deck.createDeck();

  deck.shuffleDeck();
  console.log(deck.shuffleDeck());

  const game = new Game();
  game.playGame();