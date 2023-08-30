import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

function ReactiveIcon({ Icon, className, ...props }) {
   const [theme] = useTheme();

   return (
      <button className={cn("flex h-8 w-8 items-center justify-center rounded-md border-[1px]", className, theme.borderColor.light)} {...props}>
         {React.cloneElement(Icon, { className: cn("h-5 w-5", theme.textColor.descent) })}
      </button>
   );
}

export { ReactiveIcon };
