import React from "react";
import { Text } from "./Text";

function Title({ subTitle, ...props }) {
   return (
      <div className="w-full pb-4" {...props}>
         <Text size="3xl" weight="b" align="l">
            {props.children}
         </Text>
         <Text variant="light" size="lg" align="l">
            {subTitle}
         </Text>
      </div>
   );
}

export default Title;
