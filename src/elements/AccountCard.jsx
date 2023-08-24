import React from "react";
import Login from "../components/account/Login";
import { Card, Title, Tabs, Text } from "../components/@ui/_collection";
import Register from "../components/account/Register";
import Account from "../components/account/Account";
import { useAccount } from "../state/AccountReducer";

function AccountCard() {
   const account = useAccount();

   return (
      <div className="absolute -translate-x-40">
         {account.isLoggedIn ? (
            <Account account={account} />
         ) : (
            <Card>
               <Title subTitle="Enter your credentials to enjoy betterdartonline.">Account</Title>
               <Tabs.Root className="w-full">
                  <Tabs.Trigger value="tab1" className="h-10 w-1/2 border-r-[1px] border-zinc-800">
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
      </div>
   );
}

export default AccountCard;
