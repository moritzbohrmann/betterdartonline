import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { cn } from "../../../utils/style";
import { Flex } from "../../@ui/Flex";

function ContentItem({ stretch, ...props }) {
   const [theme] = useTheme();

   return (
      <Flex align="center">
         <div className={cn("w-4 border-b-[1px]", theme.borderColor.light)} />
         <Flex justify={stretch && "between"} align="center" className="w-48 cursor-pointer" {...props} />
      </Flex>
   );
}

export default ContentItem;
