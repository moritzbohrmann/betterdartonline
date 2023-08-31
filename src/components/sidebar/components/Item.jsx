import React from "react";
import { Root } from "@radix-ui/react-collapsible";

function Item({ ...props }) {
   return <Root {...props} />;
}

export default Item;
