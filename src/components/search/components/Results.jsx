import React from "react";
import { useSearch } from "../../../context/SearchContext";
import { ThemeType, useTheme } from "../../../context/ThemeContext";
import { cn } from "../../../utils/style";
import { Badge } from "../../@ui/Badge";
import { Flex } from "../../@ui/Flex";
import { Text } from "../../@ui/Text";

const Results = () => {
   const [, , results] = useSearch();
   const [theme] = useTheme();

   const badgeStyle = cn("h-6 text-sm", theme.borderColor.light, theme.type === ThemeType.DARK ? "text-white-default" : "text-dark-default");

   return (
      <>
         {results.map((res) => {
            return (
               <Flex align="center" justify="start" gap="0" className={cn("h-8 w-full border-l-[1px]", theme.borderColor.default)}>
                  <div className={cn("w-2 border-b-[1px]", theme.borderColor.default)} />
                  <Flex align="center" justify="between" className="w-full">
                     <Badge className={badgeStyle}>{res.label}</Badge>
                     <Text size="sm">{res.text}</Text>
                  </Flex>
               </Flex>
            );
         })}
         {results.length === 0 && (
            <Flex align="center" justify="start" gap="0" className={cn("h-8 w-full border-l-[1px]", theme.borderColor.default)}>
               <div className={cn("w-2 border-b-[1px]", theme.borderColor.default)} />
               <Badge className={badgeStyle}>No results</Badge>
            </Flex>
         )}
      </>
   );
};

function SearchContent({ className, ...props }) {
   const boxStyle = cn("w-80 rounded-md p-4 backdrop-blur-md", className);

   return (
      <Flex orientation="vertical" className={boxStyle} {...props}>
         <Text size="sm" weight="b">
            Results
         </Text>
         <Flex orientation="vertical" gap="0" className="w-full px-2">
            <Results />
         </Flex>
      </Flex>
   );
}

export default SearchContent;
