import React from "react";
import searchConfig from "../search.config";

const SearchContext = React.createContext();

const SearchProvider = ({ ...props }) => {
   const [search, setSearch] = React.useState("");
   const [results, setResults] = React.useState([]);

   React.useEffect(() => {
      if (search === "") {
         setResults([]);
         return;
      }

      const terms = searchConfig.terms.filter((term) => term.includes(search));
      let termResults = [];

      terms.forEach((term) => termResults.push(searchConfig.results[term]));

      setResults(termResults);

      termResults = [];
   }, [search]);

   return <SearchContext.Provider value={[search, setSearch, results]} {...props} />;
};

const useSearch = () => {
   return React.useContext(SearchContext);
};

export { SearchProvider, useSearch };
