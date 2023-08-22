import React from "react";
import { Flex } from "../@ui/Flex";
import { Input } from "../@ui/Input";
import { Text } from "../@ui/Text";
import { Button } from "../@ui/Button";

function Login() {
   return (
      <Flex orientation="vertical" gap="2">
         <Flex justify="between" align="center" className="w-full">
            <Text>Id</Text>
            <Input placeholder="e.g. testmail@gmail.com" maxLength="16" />
         </Flex>
         <Flex justify="between" align="center" className="w-full">
            <Text>Password</Text>
            <Input placeholder="e.g. d4#+2la09" maxLength="16" />
         </Flex>
         <Button className="mt-6">Submit</Button>
      </Flex>
   );
}

export default Login;
