import React from "react";
import { Trigger as _T } from "@radix-ui/react-collapsible";
import { useTheme } from "../../../context/ThemeContext";
import { cn } from "../../../utils/style";
import { Flex } from "../../@ui/Flex";
import { Text } from "../../@ui/Text";

function Trigger({ icon, text, ...props }) {
   const [theme] = useTheme();

   return (
      <_T>
         <Flex align="center" className="cursor-pointer" {...props}>
            {React.cloneElement(icon, { className: cn("w-4 h-4", theme.textColor.default) })}
            <Text size="sm" weight="sb">
               {text}
            </Text>
         </Flex>
      </_T>
   );
}

export default Trigger;
