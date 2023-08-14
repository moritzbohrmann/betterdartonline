import { Root } from "@radix-ui/react-separator";
import { cn } from "../../utils/style";

const Separator = ({ className, ...props }) => {
   return (
      <Root
         className={cn(
            "m-0 bg-zinc-900 p-0 data-[orientation=horizontal]:h-[1px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px]",
            className
         )}
         {...props}
      />
   );
};

export default Separator;
