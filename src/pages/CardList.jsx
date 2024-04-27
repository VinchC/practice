/* eslint-disable no-unused-vars */
import SearchBar from "../components/SearchBar";
import RaceFilter from "../components/RaceFilter";
import { useLoaderData } from "react-router-dom";

// import Card component here

function CardList() {
  const cards = useLoaderData();

  return (
    <main>
      <aside>
        <h3>Apply filters</h3>
        <SearchBar />
        <RaceFilter />
        {cards.map((card) => (
          <p key={card.id}>{card.name}</p>
        ))}
      </aside>
      {console.log(cards)}
    </main>
  );
}

export default CardList;
