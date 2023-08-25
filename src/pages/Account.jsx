import AccountCard from "../elements/AccountCard";
import Navigation from "../elements/NavigationBar";
import React from "react";
import { Button, Flex } from "../components/@ui/_collection";

function Account() {
   return (
      <>
         <Navigation />
         <Flex align="center" justify="center" className="h-screen w-screen bg-gradient-to-bl from-indigo-900 via-violet-900 to-purple-900">
            <Flex orientation="vertical" gap="2">
               <AccountCard />
               <Flex justify="center" className="w-full rounded-md bg-zinc-950 py-2">
                  <Button variant="negative" onClick={() => (window.location.href = "/home")}>
                     Cancel
                  </Button>
               </Flex>
            </Flex>
         </Flex>
      </>
   );
}

export default Account;
