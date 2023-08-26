import React from "react";
import { Button, Card, Flex, Input, Text, Title } from "../@ui/_collection";

function Account({ account }) {
   return (
      <Card>
         <Title subTitle="Manage your account.">Account</Title>
         <form>
            <Flex orientation="vertical" gap="2" className="w-full">
               <Flex justify="between" align="center" className="w-full">
                  <Text>Username</Text>
                  <Input value={account.username} maxLength="16" />
               </Flex>
               <Flex justify="between" align="center" className="w-full">
                  <Text>Mail</Text>
                  <Input type="mail" value={account.username} maxLength="16" />
               </Flex>
               <Flex justify="between" align="center" className="w-full">
                  <Text>Password</Text>
                  <Input type="password" value={account.username} maxLength="16" />
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
