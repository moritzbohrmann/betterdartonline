import React from "react";
import { Flex } from "../@ui/Flex";
import { Text } from "../@ui/Text";
import { Input } from "../@ui/Input";
import { Button } from "../@ui/Button";
import { useDispatch } from "react-redux";
import { setEmail, setUsername, useProfile } from "../../state/ProfileReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Register() {
   const dispatch = useDispatch();
   const [, setStorageProfile] = useLocalStorage("profile");
   const [_profile, _setProfile] = React.useState({});
   const profile = useProfile();

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setUsername(_profile.username));
      dispatch(setEmail(_profile.email));

      setStorageProfile(profile);
   };

   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <Flex orientation="vertical" gap="2">
            <Flex justify="between" align="center" className="w-full">
               <Text>Username</Text>
               <Input
                  placeholder="e.g. dartplayer123"
                  maxLength="16"
                  onChange={(e) =>
                     _setProfile((_profile) => {
                        return { ..._profile, username: e.target.value };
                     })
                  }
                  required
               />
            </Flex>
            <Flex justify="between" align="center" className="w-full">
               <Text>Email</Text>
               <Input
                  type="email"
                  placeholder="e.g. testmail@gmail.com"
                  maxLength="16"
                  onChange={(e) =>
                     _setProfile((_profile) => {
                        return { ..._profile, email: e.target.value };
                     })
                  }
                  required
               />
            </Flex>
            <Button type="submit" className="mt-6">
               Create
            </Button>
         </Flex>
      </form>
   );
}

export default Register;
