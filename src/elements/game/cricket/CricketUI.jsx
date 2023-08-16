import Foot from "../Foot";
import Head from "../Head";
import React from "react";
import Table from "./Table";
import { Flex } from "../../../components/@ui/Flex";
import { useTheme } from "../../../context/ThemeContext";

function CricketUI() {
   const [theme] = useTheme();

   return (
      <Flex orientation="vertical" align="center" className={`w-full ${theme.background}`}>
         <Head />
         <Table />
         <Foot />
      </Flex>
   );
}

export default CricketUI;
