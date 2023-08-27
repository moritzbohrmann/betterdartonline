import Login from "../components/account/Login";
import React from "react";
import Register from "../components/account/Register";
import { Card, Tabs, Text, Title } from "../components/@ui/_collection";
import { Account } from "../components/account/Account";
import { useAccount } from "../state/AccountReducer";

function SignupCard() {
   const account = useAccount();

   return (
      <>
         {account ? (
            <Account />
         ) : (
            <Card>
               <Title subTitle="Enter your credentials and enjoy betterdartonline.">Account</Title>
               <SignupContent />
            </Card>
         )}
      </>
   );
}

const SignupContent = () => {
   return (
      <Tabs.Root className="max-h-80 w-full overflow-auto">
         <Tabs.Trigger value="tab1" className="h-10 w-1/2 border-r-[1px]">
            <Text weight="b">Login</Text>
         </Tabs.Trigger>
         <Tabs.Trigger value="tab2" className="h-10 w-1/2">
            <Text weight="b">Register</Text>
         </Tabs.Trigger>
         <Tabs.Result value="tab1" className="mt-6 w-full">
            <Login />
         </Tabs.Result>
         <Tabs.Result value="tab2" className="mt-6 w-full">
            <Register />
         </Tabs.Result>
      </Tabs.Root>
   );
};

export { SignupCard, SignupContent };
