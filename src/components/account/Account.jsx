import React from "react";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useAccount } from "../../state/AccountReducer";
import { Button, Card, Flex, Input, Text, Title } from "../@ui/_collection";

function Account() {
   const auth = useAuth();

   React.useEffect(() => {
      const checkExpiration = async () => {
         const expired = await auth.isExpired();

         if (await expired) {
            toast.error("Invalid session. Sign in again.");
            window.location.reload();
         }
      };

      checkExpiration();
   }, []);

   return (
      <Card className="absolute right-0 top-0">
         <Title subTitle="Manage your account.">Account</Title>
         <AccountContent auth={auth} />
      </Card>
   );
}

const AccountContent = ({ auth }) => {
   const account = useAccount();

   return (
      <form className="w-full">
         <Flex orientation="vertical" align="center" gap="2" className="w-full">
            <Flex justify="center" align="center" gap="4">
               <PersonIcon />
               <Input defaultValue={account?.username} maxLength="16" readOnly />
            </Flex>
            <Flex justify="center" align="center" gap="4">
               <EnvelopeClosedIcon />
               <Input type="mail" defaultValue={account?.email} maxLength="16" readOnly />
            </Flex>
            <Flex justify="center" align="center" gap="4">
               <LockClosedIcon />
               <Input type="password" defaultValue={account?.email} maxLength="16" readOnly />
            </Flex>
         </Flex>
      </form>
   );
};

export { Account, AccountContent };
