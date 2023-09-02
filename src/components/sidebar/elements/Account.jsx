import React from "react";
import { ChatBubbleIcon, EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import { ThemeType, useTheme } from "../../../context/ThemeContext";
import { Text } from "../../@ui/_collection";
import { ContentItem } from "../components/_collection";

function Account() {
   const [theme] = useTheme();
   const color = theme.type === ThemeType.DARK ? "text-white-default" : "text-black-default";

   return (
      <>
         <ContentItem>
            <EyeOpenIcon className={color} />
            <Text size="sm">account data</Text>
         </ContentItem>
         <ContentItem>
            <ChatBubbleIcon className={color} />
            <Text size="sm">Messages</Text>
         </ContentItem>
         <ContentItem>
            <TrashIcon className={color} />
            <Text size="sm">Delete account</Text>
         </ContentItem>
      </>
   );
}

export default Account;
