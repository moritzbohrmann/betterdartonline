import * as _ToolTip from "@radix-ui/react-tooltip";
import React from "react";

function ToolTip({ content, ...props }) {
   return (
      <_ToolTip.Provider>
         <_ToolTip.Root delayDuration={100}>
            <_ToolTip.Trigger className="outline-none" {...props} />

            <_ToolTip.Portal>
               <_ToolTip.Content className="data-[state=delayed-open]:animate-contentFade">
                  <div className="max-w-[12rem] rounded-md bg-zinc-300 px-2 py-1">
                     <p className="text-center font-sans text-sm text-black-default">{content}</p>
                  </div>
                  <_ToolTip.Arrow className="fill-zinc-300" />
               </_ToolTip.Content>
            </_ToolTip.Portal>
         </_ToolTip.Root>
      </_ToolTip.Provider>
   );
}

export default ToolTip;
