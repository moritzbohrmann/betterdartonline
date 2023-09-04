import React from "react";
import SearchContent from "./components/Results";
import { useSearch } from "../../context/SearchContext";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";
import { Flex, Input, Separator } from "../@ui/_collection";

function Tablet(props) {
   const [theme] = useTheme();
   const [, setSearch] = useSearch();

   const boxStyle = cn(
      "absolute left-0 top-0 z-10 w-full animate-contentFade border-b-[1px] px-8 py-2 backdrop-blur-md",
      props.className,
      theme.borderColor.light
   );

   return (
      <Flex orientation="vertical" className={boxStyle}>
         <Flex justify="around" align="center" className="w-full py-2">
            <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)} className="w-full" />
         </Flex>
         <Separator />
         <SearchContent className="w-full" />
      </Flex>
   );
}

export default Tablet;
