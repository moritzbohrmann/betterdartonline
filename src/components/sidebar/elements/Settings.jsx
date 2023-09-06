import ContentItem from "../components/ContentItem";
import React from "react";
import Switch from "../../@ui/Switch";
import { useTheme } from "../../../context/ThemeContext";
import { Text } from "../../@ui/Text";

function Settings() {
   const [, , toggleTheme] = useTheme();

   const settingList = [
      { text: "Lightmode", input: <Switch />, operation: toggleTheme },
      { text: "Caller", input: <Switch />, operation: null },
      { text: "Language", input: <img src="https://flagsapi.com/GB/flat/32.png" />, operation: null },
   ];

   const operationType = (setting) => {
      switch (setting.input.type) {
         case Switch:
            return "onCheckedChange";
         default:
            return;
      }
   };

   return (
      <>
         {settingList.map((setting) => {
            return (
               <ContentItem stretch>
                  <Text size="sm">{setting.text}</Text>
                  {React.cloneElement(setting.input, { [operationType(setting)]: setting.operation })}
               </ContentItem>
            );
         })}
      </>
   );
}

export default Settings;
