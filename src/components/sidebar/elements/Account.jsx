import ContentItem from "../components/ContentItem";
import React from "react";
import ToolTip from "../../@ui/ToolTip";
import { EnvelopeClosedIcon, IdCardIcon, LockClosedIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { useAccount } from "../../../state/AccountReducer";
import { Button } from "../../@ui/Button";
import { Text } from "../../@ui/Text";

function Account() {
   const account = useAccount();
   return (
      <>
         <ContentItem>
            <Text size="sm">{account.username}</Text>
            <Edit />
         </ContentItem>
         <ContentItem>
            <Text size="sm">{account.email}</Text>
            <Edit />
         </ContentItem>
         <ContentItem>
            <Text size="sm">{"< not visible >"}</Text>
            <Edit />
         </ContentItem>
      </>
   );
}

const Edit = ({ ...props }) => {
   return (
      <Button className="h-4 w-4 rounded-sm" {...props}>
         <ToolTip content="Edit">
            <Pencil1Icon className="h-3 w-3" />
         </ToolTip>
      </Button>
   );
};

export default Account;
