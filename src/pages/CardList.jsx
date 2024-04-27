/* eslint-disable no-unused-vars */
import SearchBar from "../components/SearchBar";
import RaceFilter from "../components/RaceFilter";
import Card from "../components/Card";
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
        <Card cards={cards} />
      </aside>
    </main>
  );
}

export default CardList;
