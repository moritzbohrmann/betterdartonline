import React from "react";
import { Card, Title, Flex, Text, Input, Button } from "../@ui/_collection";

function Account({ account }) {
   const { profile } = account;

   return (
      <Card>
         <Title subTitle="Manage your account.">Account</Title>
         <form>
            <Flex orientation="vertical" gap="2" className="w-full">
               <Flex justify="between" align="center" className="w-full">
                  <Text>Username</Text>
                  <Input value={profile.username} maxLength="16" />
               </Flex>
               <Flex justify="between" align="center" className="w-full">
                  <Text>Mail</Text>
                  <Input type="mail" value={profile.username} maxLength="16" />
               </Flex>
               <Flex justify="between" align="center" className="w-full">
                  <Text>Password</Text>
                  <Input type="password" value={profile.username} maxLength="16" />
               </Flex>
               <Button variant="negative" className="mt-6">
                  Logout
               </Button>
            </Flex>
         </form>
      </Card>
   );
}

export default Account;
