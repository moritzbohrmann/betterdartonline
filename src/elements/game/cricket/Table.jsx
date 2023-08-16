import BoardIcon from "../../../assets/board.png";
import React from "react";
import ScoreIcon from "../../../assets/score.png";
import { BorderSolidIcon, CircleIcon } from "@radix-ui/react-icons";
import { Flex } from "../../../components/@ui/Flex";
import { Hover } from "../../../components/@ui/Hover";
import { Text } from "../../../components/@ui/Text";
import { useMatch } from "../../../state/MatchReducer";
import { cn } from "../../../utils/style";

function Table() {
   return (
      <Flex justify="center" gap="0" className="h-144 w-full overflow-auto md:h-192">
         <table className="w-full overflow-scroll border-2 border-none text-center">
            <tr className="sticky top-0 z-10 h-20 w-full bg-gray-300 text-dark-window">
               <th className="h-full w-1/3 bg-slate-300">
                  <img src={ScoreIcon} className="m-auto h-10 w-10" />
               </th>
               <th className="h-full w-1/3 bg-slate-200">
                  <img src={BoardIcon} className="m-auto h-10 w-10" />
               </th>
               <th className="h-full w-1/3 bg-slate-300">
                  <img src={ScoreIcon} className="m-auto h-10 w-10" />
               </th>
            </tr>
            {[15, 16, 17, 18, 19, 20, "B"].map((value) => {
               return <Row index={value} />;
            })}
         </table>
      </Flex>
   );
}

const Row = ({ index }) => {
   const { hits } = useMatch();

   return (
      <tr>
         <td className="h-20 w-1/3">
            <Hover>
               <Flex align="center" justify="center">
                  <Text size="lg" weight="sb" className={hits?.host[index] > 0 && "hidden"}>
                     ...
                  </Text>
                  <BorderSolidIcon
                     className={cn("bg-green absolute z-10 h-8 w-8 rotate-45 text-white-default", hits?.host[index] === 0 && "hidden")}
                  />
                  <BorderSolidIcon
                     className={cn("bg-green absolute z-20 h-8 w-8 -rotate-45 text-white-default", hits?.host[index] <= 1 && "hidden")}
                  />
                  <CircleIcon className={cn("absolute z-30 h-8 w-8 text-green-400", hits?.host[index] <= 2 && "hidden")} />
               </Flex>
            </Hover>
         </td>
         <td className="h-20 w-1/3">
            <Hover>
               <Text size="2xl" weight="b" className="inline-flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-white">
                  {index}
               </Text>
            </Hover>
         </td>
         <td className="h-20 w-1/3">
            <Hover>
               <Flex align="center" justify="center">
                  <Text size="lg" weight="sb" className={hits?.guest[index] > 0 && "hidden"}>
                     ...
                  </Text>
                  <BorderSolidIcon
                     className={cn("bg-green absolute z-10 h-8 w-8 rotate-45 text-white-default", hits?.guest[index] === 0 && "hidden")}
                  />
                  <BorderSolidIcon
                     className={cn("bg-green absolute z-20 h-8 w-8 -rotate-45 text-white-default", hits?.guest[index] <= 1 && "hidden")}
                  />
                  <CircleIcon className={cn("absolute z-30 h-8 w-8 text-green-400", hits?.guest[index] <= 2 && "hidden")} />
               </Flex>
            </Hover>
         </td>
      </tr>
   );
};

export default Table;
