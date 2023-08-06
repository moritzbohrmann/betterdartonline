import React from "react";
import { useDispatch } from "react-redux";
import { Card, Title } from "../components/@ui/Card";
import { Input } from "../components/@ui/Input";
import { Text } from "../components/@ui/Text";
import { applyFilter } from "../state/PlayerlistReducer";

function FilterCard() {
   const dispatch = useDispatch();

   return (
      <Card>
         <Title title="Filter" subTitle="Searching for a particular player?" />
         <div className="flex w-full items-center justify-between pb-1">
            <Text>Keywords</Text>
            <Input placeholder="your keywords" onChange={(e) => dispatch(applyFilter(e.target.value))} />
         </div>
      </Card>
   );
}

export default FilterCard;
