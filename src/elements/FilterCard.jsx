import React from "react";
import { useDispatch } from "react-redux";
import { Card, Title } from "../components/@ui/Card";
import { Flex } from "../components/@ui/Flex";
import { Input } from "../components/@ui/Input";
import { Text } from "../components/@ui/Text";
import { applyFilter } from "../state/PlayerlistReducer";

function FilterCard() {
   const dispatch = useDispatch();

   return (
      <Card>
         <Title subTitle="Searching for a particular player?">Filter</Title>
         <Flex justify="between" align="center" className="w-full pb-1">
            <Text>Keywords</Text>
            <Input placeholder="your keywords" onChange={(e) => dispatch(applyFilter(e.target.value))} />
         </Flex>
      </Card>
   );
}

export default FilterCard;
