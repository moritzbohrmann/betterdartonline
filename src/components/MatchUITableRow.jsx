import React from "react";

function MatchUITableRow({ index, profile, socket }) {
   const emitScore = (score) => {
      socket.emit("score", score);
   };

   return (
      <tr
         key={`${profile.id} ${index}`}
         className={`bg-dark-background ${index % 2 === 0 && "brightness-110"} text-3xl font-bold text-white-default `}
      >
         <td className="h-20 w-1/5 transition-opacity hover:opacity-80">
            <input
               id={`hi${index}`}
               className="h-full w-full bg-transparent text-center outline-none"
               type="number"
               readOnly
               onKeyUp={(e) => e.target.readOnly === false && e.key === "Enter" && emitScore({ player: profile, value: Number(e.target.value) })}
            />
         </td>
         <td className="w-1/5 transition-opacity hover:opacity-80" id={`hl${index}`}></td>
         <td className="w-1/5">{(index + 1) * 3}</td>
         <td className="w-1/5 transition-opacity hover:opacity-80" id={`gl${index}`}></td>
         <td className="h-20 w-1/5 transition-opacity hover:opacity-80">
            <input id={`gi${index}`} className="h-full w-full bg-transparent text-center outline-none" readOnly />
         </td>
      </tr>
   );
}

export default MatchUITableRow;
