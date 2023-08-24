import React from "react";
import { useDispatch } from "react-redux";
import { Card, Title, Flex, Input, Text } from "../components/@ui/_collection";
import { applyFilter } from "../state/PlayerlistReducer";

function FilterCard() {
   const dispatch = useDispatch();

   return (
      <Card>
         <Title subTitle="Searching for a particular player?">Filter</Title>
         <Flex justify="between" align="center" className="w-full">
            <Text>Keywords</Text>
            <Input placeholder="your keywords" onChange={(e) => dispatch(applyFilter(e.target.value))} />
         </Flex>
      </Card>
   );
}

export default FilterCard;
