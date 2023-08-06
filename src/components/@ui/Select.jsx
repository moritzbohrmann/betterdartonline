import React from "react";
import { cn } from "../../utils/style";
import { inputVariants } from "./Input";

const Select = React.forwardRef(({ variant, size, className, ...props }, ref) => {
   const variants = inputVariants();

   return <select ref={ref} className={cn(variants({ variant, size, className }))} {...props} />;
});

export { Select };
