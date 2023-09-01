import ContentItem from "../components/ContentItem";
import React from "react";
import Switch from "../../@ui/Switch";
import { useTheme } from "../../../context/ThemeContext";
import { Text } from "../../@ui/Text";

function Settings() {
   const [, , toggleTheme] = useTheme();

   const Lightmode = () => {
      return (
         <ContentItem>
            <Text size="sm">Lightmode</Text>
            <Switch onCheckedChange={toggleTheme} />
         </ContentItem>
      );
   };

   const Caller = () => {
      return (
         <ContentItem>
            <Text size="sm">Caller</Text>
            <Switch />
         </ContentItem>
      );
   };

   const Language = () => {
      return (
         <ContentItem>
            <Text size="sm">Language</Text>
            <img src="https://flagsapi.com/GB/flat/32.png" />
         </ContentItem>
      );
   };

   return (
      <>
         <Lightmode />
         <Caller />
         <Language />
      </>
   );
}

export default Settings;
