import React from "react";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
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

   const LoginType = {
      NATIVE: "NATIVE",
      GOOGLE: "GOOGLE",
   };

   const handleSubmit = async (type, credentials = {}) => {
      let account = { type, username, email, question, password };
      const refs = [idRef.current.value, answerRef.current.value, passwordRef.current.value];

      switch (type) {
         case LoginType.NATIVE:
            return (account = { username: refs[0], email: refs[0], question: { answer: refs[1] }, password: refs[2] });
         case LoginType.GOOGLE:
            return (account = { username: credentials.name, email: credentials.email });
      }

      const result = await signup(account);

      if (result.error) {
         toast.error("Error: " + result.error);
         return;
      }
   };

   return (
      <Flex orientation="vertical" gap="2">
         <Flex justify="between" align="center" className="w-full">
            <Text>Email</Text>
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
            <Button variant="positive" onClick={() => handleSubmit(LoginType.NATIVE)} className="mt-6">
               ✔
            </Button>
         ) : (
            <Flex orientation="vertical" justify="center" align="center" className="w-full">
               <Button className="mt-6" type="submit">
                  Submit
               </Button>
               <div className="mt-2">
                  <GoogleLogin
                     theme="filled_black"
                     onSuccess={(cred) => handleSubmit(LoginType.GOOGLE, jwtDecode(cred))}
                     onError={(err) => console.log(err)}
                  />
               </div>
            </Flex>
         )}
      </Flex>
   );
}

export default Login;
