import React from "react";
import { Card, Title } from "../@ui/Card";
import { Flex } from "../@ui/Flex";
import { Text } from "../@ui/Text";
import { Input } from "../@ui/Input";
import { Button } from "../@ui/Button";
import { useProfile } from "../../state/ProfileReducer";

function Account({ profile }) {
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
