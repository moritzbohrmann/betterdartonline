import React from "react";
import { useSearch } from "../../context/SearchContext";
import { ThemeType, useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";
import { Badge, Flex, Input, Separator, Text } from "../@ui/_collection";

function Tablet(props) {
   const [theme] = useTheme();
   const [, setSearch, results] = useSearch();

   return (
      <Flex
         orientation="vertical"
         className={cn(
            "absolute left-0 top-0 w-full animate-contentFade border-b-[1px] px-8 py-2 backdrop-blur-md",
            props.className,
            theme.borderColor.light
         )}>
         <Flex justify="around" align="center" className="w-full py-4">
            <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)} className="w-full" />
         </Flex>
         <Separator />
         <Flex orientation="vertical" className="w-full py-2 transition-all">
            <Text size="sm" weight="b">
               Results
            </Text>
            {results.map((result) => {
               return (
                  <Flex justify="between" className="w-full px-2">
                     <Badge color={theme.type === ThemeType.DARK ? "white" : "black"} size="sm" className="px-1.5 py-0.5 text-sm">
                        {result.label}
                     </Badge>
                     <Text size="sm">{result.type === "LINK" ? <a href={result.link}>{result.link}</a> : result.text}</Text>
                  </Flex>
               );
            })}
            {results.length === 0 && (
               <Text size="sm" className="ml-2">
                  No Results
               </Text>
            )}
         </Flex>
      </Flex>
   );
}

export default Tablet;
