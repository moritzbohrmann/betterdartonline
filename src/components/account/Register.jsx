import React from "react";
import { EnvelopeClosedIcon, ImageIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { Button, Flex, Input } from "../@ui/_collection";

function Register() {
   const [_account, _setAccount] = React.useState({ username: "", email: "", password: "", picture: "" });
   const { register } = useAuth();
   const [theme] = useTheme();

   const handleSubmit = async (e) => {
      e.preventDefault();

      const result = await register(_account);

      if (result.error) {
         toast.error("Error: " + result.error);
         return;
      }

      if (!result.registered) {
         toast.error("Could not create account. Try again later.");
         return;
      }

      toast.success("Account successfully created.");
   };

   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <Flex orientation="vertical" align="center" gap="2">
            <Flex justify="center" align="center" gap="4">
               <PersonIcon className={theme.icon} />
               <Input
                  placeholder="Username"
                  value={_account.username}
                  onChange={(e) =>
                     _setAccount((_account) => {
                        return { ..._account, username: e.target.value };
                     })
                  }
                  required
               />
            </Flex>
            <Flex justify="center" align="center" gap="4">
               <EnvelopeClosedIcon className={theme.icon} />
               <Input
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                     _setAccount((_account) => {
                        return { ..._account, email: e.target.value };
                     })
                  }
                  required
               />
            </Flex>
            <Flex justify="center" align="center" gap="4">
               <LockClosedIcon className={theme.icon} />
               <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                     _setAccount((_account) => {
                        return { ..._account, password: e.target.value };
                     })
                  }
                  required
               />
            </Flex>
            <Flex justify="center" align="center" gap="4">
               <ImageIcon className={theme.icon} />
               <Input
                  type="url"
                  placeholder="Link to picture*"
                  onChange={(e) =>
                     _setAccount((_account) => {
                        return { ..._account, picture: e.target.value };
                     })
                  }
               />
            </Flex>
            <Button type="submit" className="mt-4 w-[220px]">
               Create
            </Button>
         </Flex>
      </form>
   );
}

export default Register;
