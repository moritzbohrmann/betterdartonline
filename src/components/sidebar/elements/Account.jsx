import React from "react";
import { ChatBubbleIcon, EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import { ThemeType, useTheme } from "../../../context/ThemeContext";
import { Text } from "../../@ui/_collection";
import { ContentItem } from "../components/_collection";

function Account() {
   const [theme] = useTheme();
   const color = theme.type === ThemeType.DARK ? "text-white-default" : "text-black-default";

   const accountOperationList = [
      { icon: <EyeOpenIcon />, text: "Account data" },
      { icon: <ChatBubbleIcon />, text: "Messages" },
      { icon: <TrashIcon />, text: "Delete account" },
   ];

   return (
      <>
         {accountOperationList.map((operation) => {
            return (
               <ContentItem>
                  {React.cloneElement(operation.icon, { className: color })}
                  <Text size="sm">{operation.text}</Text>
               </ContentItem>
            );
         })}
      </>
   );
}

export default Account;
