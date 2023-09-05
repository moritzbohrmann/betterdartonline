import ContentItem from "../components/ContentItem";
import React from "react";
import Switch from "../../@ui/Switch";
import { useTheme } from "../../../context/ThemeContext";
import { Text } from "../../@ui/Text";

function Settings() {
   const [, , toggleTheme] = useTheme();

   return (
      <>
         <ContentItem stretch>
            <Text size="sm">Lightmode</Text>
            <Switch onCheckedChange={toggleTheme} />
         </ContentItem>
         <ContentItem stretch>
            <Text size="sm">Caller</Text>
            <Switch />
         </ContentItem>
         <ContentItem stretch>
            <Text size="sm">Language</Text>
            <img src="https://flagsapi.com/GB/flat/32.png" />
         </ContentItem>
      </>
   );
}

export default Settings;