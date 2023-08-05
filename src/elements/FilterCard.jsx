import React from "react";
import { useDispatch } from "react-redux";
import { Card, Title } from "../components/@ui/Card";
import { useTheme } from "../context/ThemeContext";
import { applyFilter } from "../state/PlayerlistReducer";

function FilterCard() {
   const dispatch = useDispatch();
   const [theme] = useTheme();

   return (
      <Card>
         <Title title="Filter" subTitle="Searching for a particular player?" />
         <div className="grid">
            <div className="flex w-full items-center justify-between pb-1">
               <h2 className="text-md">Keywords</h2>
               <input
                  type="text"
                  onChange={(e) => dispatch(applyFilter(e.target.value))}
                  className={`h-8 w-48 rounded-md border-[1px] border-zinc-900 px-4 outline-none ${theme.backgroundColor}`}
               />
            </div>
         </div>
      </Card>
   );
}

export default FilterCard;
