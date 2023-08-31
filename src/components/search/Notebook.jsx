import React from "react";
import { useSearch } from "../../context/SearchContext";
import { ThemeType, useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";
import { Badge } from "../@ui/Badge";
import { Flex } from "../@ui/Flex";
import { Input } from "../@ui/Input";
import { Text } from "../@ui/Text";

function Notebook() {
   const [theme] = useTheme();
   const [, setSearch, results] = useSearch();

   const [resultsVisible, setResultsVisible] = React.useState(false);

   return (
      <Flex orientation="vertical" onPointerEnter={() => setResultsVisible(true)} onPointerOut={() => setResultsVisible(false)} className="relative">
         <Input size="3xl" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
         <Flex
            orientation="vertical"
            className={cn(
               "absolute mt-10 w-full animate-contentShow rounded-md border-[1px] px-4 py-2 backdrop-blur-md",
               theme.borderColor.light,
               !resultsVisible && "hidden"
            )}>
            <Text size="sm" weight="b">
               Results
            </Text>
            <Flex orientation="vertical" className={cn("w-full border-l-[1px]", theme.borderColor.light)}>
               {results.map((result) => {
                  return (
                     <Flex justify="between" align="center" className="w-full">
                        <Flex align="center">
                           <div className={cn("w-2 border-b-[1px]", theme.borderColor.light)} />
                           <Badge color={theme.type === ThemeType.DARK ? "white" : "black"} size="sm" className="px-1.5 py-0.5 text-sm">
                              {result.label}
                           </Badge>
                        </Flex>
                        <Text size="sm">{result.type === "LINK" ? <a href={result.link}>{result.link}</a> : result.text}</Text>
                     </Flex>
                  );
               })}
               {results.length === 0 && (
                  <Flex justify="between" align="center" className="w-full">
                     <Flex align="center">
                        <div className={cn("w-2 border-b-[1px]", theme.borderColor.light)} />
                        <Text size="sm">No results</Text>
                     </Flex>
                  </Flex>
               )}
            </Flex>
         </Flex>
      </Flex>
   );
}

export default Notebook;
