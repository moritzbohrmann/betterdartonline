import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

function ReactiveIcon({ Icon, className, ...props }) {
   const [theme] = useTheme();

   return (
      <button className={cn("rounded-md border-[1px] p-1", className, theme.borderColor.default)} {...props}>
         {React.cloneElement(Icon, { className: cn("h-5 w-5", theme.textColor.default) })}
      </button>
   );
}

export { ReactiveIcon };
