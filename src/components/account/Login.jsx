import React from "react";
import jwtDecode from "jwt-decode";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { ThemeType, useTheme } from "../../context/ThemeContext";
import { useAccount } from "../../state/AccountReducer";
import { Button, Flex, Input } from "../@ui/_collection";

function Login() {
   const idRef = React.useRef(null);
   const passwordRef = React.useRef(null);
   const [theme] = useTheme();

   const { doLogin } = useAuth();

   const LoginType = {
      NATIVE: "Native",
      GOOGLE: "Google",
   };

   const handleSubmit = async (type, credentials = {}) => {
      let account = { type, username: "", email: "", password: "" };

      switch (type) {
         case LoginType.NATIVE:
            account = { ...account, username: idRef.current.value, email: idRef.current.value, password: passwordRef.current.value };
            break;
         case LoginType.GOOGLE:
            account = { ...account, username: credentials.name, email: credentials.email, picture: credentials.picture };
            break;
         default:
            break;
      }

      const login = await doLogin(account);
      const { error } = await login;

      if (error) {
         toast.error("Error: " + error);
         return;
      }
   };

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <Flex orientation="vertical" align="center" gap="2">
            <Flex justify="center" align="center" gap="4">
               <EnvelopeClosedIcon className={theme.icon} />
               <Input ref={idRef} placeholder="Email or username" required />
            </Flex>
            <Flex justify="center" align="center" gap="4">
               <LockClosedIcon className={theme.icon} />
               <Input ref={passwordRef} placeholder="Password" required />
            </Flex>
            <Flex orientation="vertical" justify="center" align="center" className="w-full">
               <Button type="submit" onClick={() => handleSubmit(LoginType.NATIVE)} className="mt-4 w-[220px]">
                  Submit
               </Button>
               <div className="mt-2">
                  <GoogleLogin
                     theme={theme.type === ThemeType.DARK ? "filled_black" : "filled_blue"}
                     onSuccess={({ credential }) => handleSubmit(LoginType.GOOGLE, jwtDecode(credential))}
                     onError={(err) => console.log(err)}
                     shape="square"
                     text="continue_with"
                     width={220}
                     locale="EN"
                  />
               </div>
            </Flex>
         </Flex>
      </form>
   );
}

export default Login;
