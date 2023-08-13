import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

const deck = [
  { color: "red", value: "heart", flipped: false },
  { color: "black", value: "spade", flipped: false },
  { color: "black", value: "club", flipped: false },
  { color: "red", value: "diamond", flipped: false },
  { color: "red", value: "heart", flipped: false },
  { color: "black", value: "spade", flipped: false },
  { color: "black", value: "club", flipped: false },
  { color: "red", value: "diamond", flipped: false },
  { color: "red", value: "heart", flipped: false },
  { color: "black", value: "spade", flipped: false },
  { color: "black", value: "club", flipped: false },
  { color: "red", value: "diamond", flipped: false },
  { color: "red", value: "heart", flipped: false },
  { color: "black", value: "spade", flipped: false },
  { color: "black", value: "club", flipped: false },
  { color: "red", value: "diamond", flipped: false },
  { color: "red", value: "heart", flipped: false },
  { color: "black", value: "spade", flipped: false },
  { color: "black", value: "club", flipped: false },
  { color: "red", value: "diamond", flipped: false },
  { color: "red", value: "heart", flipped: false },
  { color: "black", value: "spade", flipped: false },
  { color: "black", value: "club", flipped: false },
  { color: "red", value: "diamond", flipped: false },
  { color: "red", value: "heart", flipped: false },
  { color: "black", value: "spade", flipped: false },
  { color: "black", value: "club", flipped: false },
  { color: "red", value: "diamond", flipped: false },
  { color: "red", value: "heart", flipped: false },
  { color: "black", value: "spade", flipped: false },
  { color: "black", value: "club", flipped: false },
  { color: "red", value: "diamond", flipped: false },
  // Repeat these cards for a total of 8 each
];

function App() {
  const [cards, setCards] = useState(deck);

  const handleCardClick = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].flipped = !updatedCards[index].flipped;
    setCards(updatedCards);
  };

  return (
    <div className="App">
      <h1>Card Game</h1>
      <div className="card-deck">
        {cards.map((card, index) => (
          <Card
            key={index}
            color={card.color}
            value={card.value}
            flipped={card.flipped}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
