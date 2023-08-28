import React from "react";
import jwtDecode from "jwt-decode";
import { LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { ThemeType, useTheme } from "../../context/ThemeContext";
import { useAccount } from "../../state/AccountReducer";
import { Button, Flex, Input } from "../@ui/_collection";

function Login() {
   const idRef = React.useRef(null);
   const passwordRef = React.useRef(null);
   const account = useAccount();
   const [theme] = useTheme();

   const { signup } = useAuth();

   const LoginType = {
      NATIVE: "NATIVE",
      GOOGLE: "GOOGLE",
   };

   const handleSubmit = async (type, credentials = {}) => {
      let account = { type, username: "", email: "", password: "" };

      switch (type) {
         case LoginType.NATIVE:
            account = { username: idRef.current.value, email: idRef.current.value, password: passwordRef.current.value };
            break;
         case LoginType.GOOGLE:
            account = { ...account, username: credentials.name, email: credentials.email, picture: credentials.picture };
            break;
         default:
            break;
      }

      const result = await signup(account);

      if (result.error) {
         toast.error("Error: " + result.error);
         return;
      }
   };

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <Flex orientation="vertical" align="center" gap="2">
            <Flex justify="center" align="center" gap="4">
               <PersonIcon />
               <Input ref={idRef} placeholder="Email or username" maxLength="16" required />
            </Flex>
            <Flex justify="center" align="center" gap="4">
               <LockClosedIcon />
               <Input ref={passwordRef} placeholder="Password" maxLength="16" required />
            </Flex>
            {account ? (
               <Button variant="positive" onClick={() => handleSubmit(LoginType.NATIVE)} className="mt-6">
                  ✔
               </Button>
            ) : (
               <Flex orientation="vertical" justify="center" align="center" className="w-full">
                  <Button type="submit" onClick={() => handleSubmit(LoginType.NATIVE)} className="mt-4">
                     Submit
                  </Button>
                  <div className="mt-2">
                     <GoogleLogin
                        theme={theme.type === ThemeType.DARK ? "filled_black" : "filled_blue"}
                        onSuccess={({ credential }) => handleSubmit(LoginType.GOOGLE, jwtDecode(credential))}
                        onError={(err) => console.log(err)}
                     />
                  </div>
               </Flex>
            )}
         </Flex>
      </form>
   );
}

export default Login;
