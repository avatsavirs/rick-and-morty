import useDebounce from 'hooks/useDebounce';
import {createContext, useContext, useState} from 'react';

const SearchContext = createContext();

export function SearchProvider({children}) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  return (
    <SearchContext.Provider value={[searchTerm, debouncedSearchTerm, setSearchTerm]}>
      {children}
    </SearchContext.Provider>
  )
}


export function useSearchTerm() {
  const value = useContext(SearchContext);
  if (!value) {
    throw new Error("useSearchTerm can be used inside SearchProvider");
  }
  return value;
}
