import Foot from "../Foot";
import Head from "../Head";
import React from "react";
import Table from "./Table";
import { Flex } from "../../../components/@ui/Flex";
import { useTheme } from "../../../context/ThemeContext";

function X01UI() {
   const [theme] = useTheme();

   return (
      <Flex orientation="vertical" align="center" gap="0" className={`w-full ${theme.background}`}>
         <Head />
         <Table />
         <Foot />
      </Flex>
   );
}

export default X01UI;
