import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEmail, setUsername, useAccount } from "../../state/AccountReducer";
import { Button, Flex, Input, Select, Text } from "../@ui/_collection";

function Register() {
   const dispatch = useDispatch();
   const [_account, _setAccount] = React.useState({ username: "", email: "", password: "", question: { value: "", answer: "" } });
   const account = useAccount();

   const authQuestOptions = ["What's your parent's name?", "What was your first pet's name?", "What's your favourite Hobby?"];

   const handleSubmit = async (e) => {
      e.preventDefault();

      const getResult = () => {
         axios.get("http://localhost:3003/test").then((res) => {
            console.log(res);
         });
      };

      getResult();

      //dispatch(setUsername(_account.username));
      //dispatch(setEmail(_account.email));
   };

   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <Flex orientation="vertical" gap="2">
            <Flex justify="between" align="center" className="w-full">
               <Text>Username</Text>
               <Input
                  placeholder="your username"
                  maxLength="16"
                  onChange={(e) =>
                     _setAccount((_account) => {
                        return { ..._account, username: e.target.value };
                     })
                  }
                  required
               />
            </Flex>
            <Flex justify="between" align="center" className="w-full">
               <Text>Email</Text>
               <Input
                  type="email"
                  placeholder="your email address"
                  maxLength="16"
                  onChange={(e) =>
                     _setAccount((_account) => {
                        return { ..._account, email: e.target.value };
                     })
                  }
                  required
               />
            </Flex>
            <Flex justify="between" align="center" className="w-full">
               <Text>Password</Text>
               <Input
                  type="password"
                  placeholder="your password"
                  maxLength="16"
                  onChange={(e) =>
                     _setAccount((_account) => {
                        return { ..._account, password: e.target.value };
                     })
                  }
                  required
               />
            </Flex>
            <Flex orientation="vertical" align="center" className="w-full">
               <Text weight="sb" className="my-2">
                  Authentication
               </Text>
               <Flex align="center" justify="between" className="w-full">
                  <Text>Question</Text>
                  <Select
                     placeholder="select question"
                     maxLength="16"
                     onChange={(e) =>
                        _setAccount((_account) => {
                           return { ..._account, question: { ..._account.question, value: e.target.value } };
                        })
                     }
                     required>
                     {authQuestOptions.map((question) => {
                        return <option value={question}>{question}</option>;
                     })}
                  </Select>
               </Flex>
               <Flex align="center" justify="between" className="w-full">
                  <Text>Answer</Text>
                  <Input
                     placeholder="your answer"
                     maxLength="16"
                     onChange={(e) =>
                        _setAccount((_account) => {
                           return { ..._account, question: { ..._account.question, answer: e.target.value } };
                        })
                     }
                     required
                  />
               </Flex>
            </Flex>
            <Button type="submit" className="mt-6">
               Create
            </Button>
         </Flex>
      </form>
   );
}

export default Register;
