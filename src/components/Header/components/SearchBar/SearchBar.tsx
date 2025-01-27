import { useState } from "react";
import { SearchIcon } from "@components/icons";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        value={searchValue}
        placeholder="제목 검색"
        onChange={handleSearchChange}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
