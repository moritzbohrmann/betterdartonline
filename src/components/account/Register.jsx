import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { Button, Flex, Input, Select, Separator, Text } from "../@ui/_collection";

function Register() {
   const [_account, _setAccount] = React.useState({ username: "", email: "", password: "", question: { value: "", answer: "" } });
   const { register } = useAuth();

   const authQuestOptions = ["What is your parents name?", "What was your first pets name?", "What is your favourite Hobby?"];

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
            <Separator className="mt-2" />
            <Flex orientation="vertical" align="center" className="w-full">
               <Text weight="sb" className="my-2">
                  Question
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
                        return (
                           <option value={question} selected>
                              {question}
                           </option>
                        );
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
