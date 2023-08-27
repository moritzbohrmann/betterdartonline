import React from "react";
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
      <Card className="absolute -translate-x-72">
         <Title subTitle="Manage your account.">Account</Title>
         <AccountContent auth={auth} />
      </Card>
   );
}

const AccountContent = ({ auth }) => {
   const account = useAccount();

   const handleLogout = async (e) => {
      e.preventDefault();

      const { error } = await auth.signout();

      if (!(await error)) toast.success("Successfully signed out.");
   };

   return (
      <form onSubmit={(e) => handleLogout(e)} className="w-full">
         <Flex orientation="vertical" gap="2" className="w-full">
            <Flex justify="between" align="center" className="w-full">
               <Text>Username</Text>
               <Input defaultValue={account?.username} maxLength="16" readOnly />
            </Flex>
            <Flex justify="between" align="center" className="w-full">
               <Text>Mail</Text>
               <Input type="mail" defaultValue={account?.email} maxLength="16" readOnly />
            </Flex>
            <Flex justify="between" align="center" className="w-full">
               <Text>Password</Text>
               <Input type="password" defaultValue={account?.email} maxLength="16" readOnly />
            </Flex>
            <Button type="submit" variant="negative" className="mt-6">
               Sign out
            </Button>
         </Flex>
      </form>
   );
};

export { Account, AccountContent };
