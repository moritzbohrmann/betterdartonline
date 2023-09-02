import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useAccount } from "../../../state/AccountReducer";
import { Flex, Input, Text } from "../../@ui/_collection";

function Username() {
   const account = useAccount();
   const [theme] = useTheme();

   return (
      <Flex justify="between" align="center" className="w-full">
         <Text>Username</Text>
         <Input value={account ? account.username : ""} className={account ? theme.borderColor.positive : theme.borderColor.negative} readOnly />
      </Flex>
   );
}

export default Username;
