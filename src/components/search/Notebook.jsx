import React from "react";
import SearchContent from "./components/Results";
import { useSearch } from "../../context/SearchContext";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";
import { Flex } from "../@ui/Flex";
import { Input } from "../@ui/Input";

function Notebook({ className, ...props }) {
   const [, setSearch] = useSearch();
   const [theme] = useTheme();

   const [resultsVisible, setResultsVisible] = React.useState(false);

   return (
      <Flex
         orientation="vertical"
         onPointerEnter={() => setResultsVisible(true)}
         onPointerOut={() => setResultsVisible(false)}
         className={cn("relative", className)}>
         <Input size="3xl" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
         <SearchContent className={cn("absolute mt-2 border-[1px]", !resultsVisible && "hidden", theme.borderColor.light)} />
      </Flex>
   );
}

export default Notebook;
