import { Root } from "@radix-ui/react-separator";
import { cn } from "../../utils/style";
import { useTheme } from "../../context/ThemeContext";

const Separator = ({ className, ...props }) => {
   const [theme] = useTheme();

   return (
      <Root
         className={cn(
            "m-0 p-0 data-[orientation=horizontal]:h-[1px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px]",
            theme.separator,
            className
         )}
         {...props}
      />
   );
};

export default Separator;
