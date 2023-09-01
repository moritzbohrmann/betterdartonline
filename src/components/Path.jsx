import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Flex } from "./@ui/Flex";
import { Text } from "./@ui/Text";

function Path({ ...props }) {
   const [theme] = useTheme();
   const navigate = useNavigate();
   const { pathname } = useLocation();

   return (
      <Flex align="center" {...props}>
         {pathname
            .replace("/home", "")
            .split("/")
            .map((path) => {
               if (path === "") return;
               else
                  return (
                     <>
                        <ArrowRightIcon className={theme.textColor.default} />
                        <Text variant="light" size="sm" weight="sb" onClick={() => navigate("/" + path)} className="cursor-pointer hover:underline">
                           {path}
                        </Text>
                     </>
                  );
            })}
      </Flex>
   );
}

export default Path;
