import Account from "../components/account/Account";
import Login from "../components/account/Login";
import React from "react";
import Register from "../components/account/Register";
import { Card, Separator, Tabs, Text, Title } from "../components/@ui/_collection";
import { useAccount } from "../state/AccountReducer";

function AccountCard() {
   const account = useAccount();

   return (
      <>
         {account.isLoggedIn ? (
            <Account account={account} />
         ) : (
            <Card>
               <Title subTitle="Enter your credentials to enjoy betterdartonline.">Account</Title>
               <Tabs.Root className="w-full">
                  <Tabs.Trigger value="tab1" className="h-10 w-1/2 border-r-[1px]">
                     <Text weight="b">Login</Text>
                  </Tabs.Trigger>
                  <Tabs.Trigger value="tab2" className="h-10 w-1/2">
                     <Text weight="b">Register</Text>
                  </Tabs.Trigger>
                  <Tabs.Result value="tab1" className="mt-6">
                     <Login />
                  </Tabs.Result>
                  <Tabs.Result value="tab2" className="mt-6">
                     <Register />
                  </Tabs.Result>
               </Tabs.Root>
            </Card>
         )}
      </>
   );
}

export default AccountCard;
