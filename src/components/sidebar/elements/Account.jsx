import React from "react";
import { ChatBubbleIcon, EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import { useAccount } from "../../../state/AccountReducer";
import { Text } from "../../@ui/_collection";
import { AccountContent } from "../../account/Account";
import { Content, ContentItem, Item, Trigger } from "../components/_collection";

function Account() {
   const account = useAccount();

   return (
      <>
         <ContentItem>
            <Item>
               <Trigger icon={<EyeOpenIcon />} text="View" />
               <Content element={<AccountContent />} />
            </Item>
         </ContentItem>
         <ContentItem>
            <ChatBubbleIcon color="white" />
            <Text size="sm">Messages</Text>
         </ContentItem>
         <ContentItem>
            <TrashIcon color="white" />
            <Text size="sm">Delete account</Text>
         </ContentItem>
      </>
   );
}

export default Account;
