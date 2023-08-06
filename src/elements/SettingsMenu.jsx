import * as Switch from "@radix-ui/react-switch";
import React from "react";
import { Card, Title } from "../components/@ui/Card";
import { ThemeStyle, ThemeType, useTheme } from "../context/ThemeContext";
import { cn } from "../utils/style";

function SettingsMenu() {
   const [theme, setTheme] = useTheme();

   const toggleTheme = () => {
      const newTheme = theme.type === ThemeType.LIGHT ? ThemeStyle(ThemeType.DARK) : ThemeStyle(ThemeType.LIGHT);

      setTheme(newTheme);
   };

   return (
      <Card className="absolute">
         <Title title="Settings" subTitle="Customize the app according to your preferences." />
         <div className={cn("flex w-full items-center justify-between border-b-[1px] px-8 pb-4", theme.borderColor.light)}>
            <h2>Lightmode</h2>
            <Switch.Root
               onCheckedChange={toggleTheme}
               checked={theme.type === ThemeType.LIGHT}
               className={`relative h-[25px] w-[42px] rounded-full border-[1px]  ${
                  theme.type === ThemeType.DARK ? "border-white bg-white" : "border-dark-background bg-dark-background"
               } outline-none`}>
               <Switch.Thumb
                  className={`block h-[21px] w-[21px] translate-x-0.5 rounded-full ${
                     theme.type === ThemeType.DARK ? "bg-dark-background" : "bg-white"
                  } transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]`}
               />
            </Switch.Root>
         </div>
         <div className={cn("flex w-full items-center justify-between border-b-[1px] border-zinc-900 px-8 py-4", theme.borderColor.light)}>
            <h2>Caller</h2>
            <Switch.Root
               className={`relative h-[25px] w-[42px] rounded-full border-[1px]  ${
                  theme.type === ThemeType.DARK ? "border-white bg-white" : "border-dark-background bg-dark-background"
               } outline-none`}>
               <Switch.Thumb
                  className={`block h-[21px] w-[21px] translate-x-0.5 rounded-full ${
                     theme.type === ThemeType.DARK ? "bg-dark-background" : "bg-white"
                  } transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]`}
               />
            </Switch.Root>
         </div>
      </Card>
   );
}

export default SettingsMenu;
