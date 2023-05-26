import { useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';



function App() {
  const [deck,setDeck] = useState(generateDeck())
  const [pickedCards,setPickedCards] = useState([])
console.log(deck)
function generateDeck() {
  const symbols = ["∆ ","ß","£" ,"§" ,"•" , "$", "+" , "ø"]
  const deck = []
   
  for (let i = 0 ; i < 16; i++) {
    const newdeck = {isFlipped: false,symbol: symbols[i % 8]}
    deck.push(newdeck);
  }
  shuffle(deck)
    return deck ;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function  pickCard(cardIndex){
  const pickedCard = deck[cardIndex]
    if (pickedCard.isFlipped) return;
 const  cardToFlip = {...deck[cardIndex], isFlipped:true}
 const  newPickedCards = pickedCards.concat(cardIndex);
 const newDeck= deck.map((card,index)=>{
  if (cardIndex === index){
    return cardToFlip;
  }
  return card;
 });
 if (newPickedCards.length === 2) {
  const card1Index = newPickedCards[0]
  const card2Index = newPickedCards[1]
    if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol ) {
      setTimeout(() => unflipCards(card1Index,card2Index), 1000);
  }
 }
 setDeck(newDeck)
 setPickedCards(newPickedCards)
 
}
function unflipCards (card1Index,card2Index) {
  const card1 ={...deck[card1Index], isFlipped:false};
  const card2 ={...deck[card2Index], isFlipped:false}

  const newDeck= deck.map((card)=>{
    if (card.symbol === card1.symbol){
      return card1;
    }
    if (card.symbol === card2.symbol){
      return card2;
    }
    return card;
   });

   setDeck(newDeck)

}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h2>Match Cards To Win</h2>
        <div class="grid-container">
       {deck.map((card,idx)=>
       <MemoryCard key={idx} symbol={card.symbol} isFlipped={card.isFlipped} pickCard={()=> pickCard(idx)}  />
       )}
        </div>
      </header>
    </div>
  );
}

export default App;
