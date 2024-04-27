import PropTypes from "prop-types";

function SearchBar({setSearch}) {
  return <input onInput={(e) => setSearch(e.target.value)} type="text" placeholder="Search"></input>
}

SearchBar.propTypes = {
  setSearch: PropTypes.func
};

export default SearchBar;