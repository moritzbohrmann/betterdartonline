import React from "react";
import { Flex, Input, Text, Button } from "../@ui/_collection";

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
