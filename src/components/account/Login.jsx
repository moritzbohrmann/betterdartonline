import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useAccount } from "../../state/AccountReducer";
import { Button, Flex, Input, Text } from "../@ui/_collection";

function Login() {
   const idRef = React.useRef(null);
   const passwordRef = React.useRef(null);
   const answerRef = React.useRef(null);
   const account = useAccount();

   const { signup } = useAuth();

   const handleSubmit = async (e) => {
      e.preventDefault();

      const account = {
         username: idRef.current.value,
         email: idRef.current.value,
         question: { answer: answerRef.current.value },
         password: passwordRef.current.value,
      };

      const result = await signup(account);

      if (result.error) {
         toast.error("Error: " + result.error);
         return;
      }
   };

   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <Flex orientation="vertical" gap="2">
            <Flex justify="between" align="center" className="w-full">
               <Text>Id</Text>
               <Input ref={idRef} placeholder="your email" maxLength="16" required />
            </Flex>
            <Flex justify="between" align="center" className="w-full">
               <Text>Password</Text>
               <Input ref={passwordRef} placeholder="your password" maxLength="16" required />
            </Flex>
            <Flex justify="between" align="center" className="w-full">
               <Text>Answer</Text>
               <Input ref={answerRef} placeholder="your answer" maxLength="16" required />
            </Flex>
            {account ? (
               <Button variant="positive" className="mt-6">
                  ✔
               </Button>
            ) : (
               <Button className="mt-6" type="submit">
                  Submit
               </Button>
            )}
         </Flex>
      </form>
   );
}

export default Login;
