import React from "react";
import { Flex } from "../../@ui/Flex";
import { Content, Item, Trigger, Unit } from "./_collection";

function UserOptions({ options }) {
   return (
      <Flex orientation="vertical" className="mt-4 w-full">
         {options.map(({ unit, options }) => {
            return unit ? (
               <Unit>
                  {options.map((option) => {
                     return (
                        <Item>
                           <Trigger icon={option.icon} text={option.text} onClick={option.operation} />
                           <Content element={option.element} />
                        </Item>
                     );
                  })}
               </Unit>
            ) : (
               <>
                  {options.map((option) => {
                     return (
                        <Item>
                           <Trigger icon={option.icon} text={option.text} onClick={option.operation} />
                           <Content element={option.element} />
                        </Item>
                     );
                  })}
               </>
            );
         })}
      </Flex>
   );
}

export default UserOptions;
