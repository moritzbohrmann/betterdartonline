import React from "react";

function MatchUITableRow({ index, profile, socket }) {
   return (
      <tr className={`bg-dark-background ${index % 2 === 0 && "brightness-110"} text-3xl font-bold text-white-default `}>
         <td className="w-1/5 h-20 hover:opacity-80 transition-opacity">
            <input
               id={`hi${index}`}
               className="w-full h-full bg-transparent text-center outline-none"
               type="number"
               readOnly
               onKeyUp={(e) =>
                  e.target.readOnly === false && e.key === "Enter" && socket.emit("score", { player: profile, value: Number(e.target.value) })
               }
            />
         </td>
         <td className="w-1/5 hover:opacity-80 transition-opacity" id={`hl${index}`}></td>
         <td className="w-1/5">{(index + 1) * 3}</td>
         <td className="w-1/5 hover:opacity-80 transition-opacity" id={`gl${index}`}></td>
         <td className="w-1/5 h-20 hover:opacity-80 transition-opacity">
            <input id={`gi${index}`} className="w-full h-full bg-transparent text-center outline-none" readOnly />
         </td>
      </tr>
   );
}

export default MatchUITableRow;
