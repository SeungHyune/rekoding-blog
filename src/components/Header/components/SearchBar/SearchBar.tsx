import { useEffect, useState } from "react";
import { SearchIcon } from "@components/icons";
import styles from "./searchBar.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDebounce } from "@/hooks";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams] = useSearchParams();

  const debouncedValue = useDebounce({ value: searchValue, delay: 300 });

  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedValue || debouncedValue === "") {
      navigate(`/search?search=${debouncedValue}`);
    }
  }, [debouncedValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchValue = searchParams.get("search") || "";

    if (debouncedValue === searchValue) {
      return;
    }

    if (debouncedValue === "" || debouncedValue.trim() === "") {
      return;
    }

    navigate(`/search?search=${debouncedValue}`);
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
