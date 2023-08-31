import React from "react";
import { Content as _C } from "@radix-ui/react-collapsible";
import { useTheme } from "../../../context/ThemeContext";
import { cn } from "../../../utils/style";
import { Flex } from "../../@ui/Flex";

function Content({ className, element, ...props }) {
   const [theme] = useTheme();

   return (
      <_C className={cn("my-2 ml-2 animate-contentFade border-l-[1px]", theme.borderColor.light, className)} {...props}>
         <Flex orientation="vertical">{element}</Flex>
      </_C>
   );
}

export default Content;
