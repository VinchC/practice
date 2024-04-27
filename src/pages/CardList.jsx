/* eslint-disable no-unused-vars */
import SearchBar from "../components/SearchBar";
import RaceFilter from "../components/RaceFilter";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0`)
      .then(({ data }) => setCards(data.data));
  });
  // console.log(cards);

  return (
    <main>
      <aside>
        <h3>Apply filters</h3>
        <SearchBar />
        <RaceFilter />
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </aside>
    </main>
  );
}

export default CardList;
