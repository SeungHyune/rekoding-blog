import { useEffect, useState } from "react";
import { SearchIcon } from "@components/icons";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDebounce } from "@/hooks";
import { ROUTES } from "@/constants/route/route";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
  );

  const debouncedValue = useDebounce({ value: searchValue, delay: 300 });

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === ROUTES.SEARCH || debouncedValue) {
      navigate(`/search?search=${debouncedValue}`);
    }
  }, [debouncedValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentSearchValue = searchParams.get("search") || "";

    if (debouncedValue === currentSearchValue) {
      return;
    }

    if (!debouncedValue.trim()) {
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
