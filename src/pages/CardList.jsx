import SearchBar from "../components/SearchBar";
import RaceFilter from "../components/RaceFilter";
// import Card component here

function CardList() {
  
  // get data from API here

  return (
    <main>
      <aside>
        <h3>Apply filters</h3>
        <SearchBar />
        <RaceFilter />
      </aside>
      {/* map cards here */}
    </main>
  );
}

export default CardList;