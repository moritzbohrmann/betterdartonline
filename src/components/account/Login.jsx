import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Button, Flex, Input, Text } from "../@ui/_collection";

function Login() {
   const idRef = React.useRef(null);
   const passwordRef = React.useRef(null);

   const handleSubmit = () => {};

   return (
      <Flex orientation="vertical" gap="2">
         <Flex justify="between" align="center" className="w-full">
            <Text>Id</Text>
            <Input ref={idRef} placeholder="e.g. testmail@gmail.com" maxLength="16" />
         </Flex>
         <Flex justify="between" align="center" className="w-full">
            <Text>Password</Text>
            <Input ref={passwordRef} placeholder="e.g. d4#+2la09" maxLength="16" />
         </Flex>
         <Button className="mt-6" onClick={() => handleSubmit()}>
            Submit
         </Button>
      </Flex>
   );
}

export default Login;
