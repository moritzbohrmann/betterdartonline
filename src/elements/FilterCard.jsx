import React from "react";
import { useDispatch } from "react-redux";
import { Card, Title } from "../components/@ui/Card";
import { applyFilter } from "../state/PlayerlistReducer";

function FilterCard() {
   const dispatch = useDispatch();

   return (
      <Card>
         <Title title="Filter" subTitle="Searching for a particular player?" />
         <div className="grid">
            <div className="flex w-full items-center justify-between pb-1">
               <h2 className="text-md text-white-default">Schlüsselworte</h2>
               <input
                  type="text"
                  onChange={(e) => dispatch(applyFilter(e.target.value))}
                  className="h-8 w-40 rounded-md border-[1px] border-zinc-900 bg-dark-background px-4 text-white-default outline-none"
               />
            </div>
         </div>
      </Card>
   );
}

export default FilterCard;
