import React from "react";
import { Card, Title } from "../components/@ui/Card";
import Login from "../components/account/Login";
import * as Tabs from "../components/@ui/Tabs";
import { Text } from "../components/@ui/Text";
import Register from "../components/account/Register";
import Account from "../components/account/Account";
import { useProfile } from "../state/ProfileReducer";

function AccountCard() {
   const profile = useProfile();

   return (
      <div className="absolute">
         {profile === null ? (
            <Account profile={profile} />
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
