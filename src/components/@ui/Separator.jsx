import { cn } from "../../utils/style";
import { useTheme } from "../../context/ThemeContext";
import { Flex, Text } from "./_collection";

const SeparationBorder = ({ orientation }) => {
   const [theme] = useTheme();

   return <div className={cn(orientation === "vertical" ? "h-full border-l-[1px]" : "w-full border-t-[1px]", theme.borderColor.light)} />;
};

const Separator = ({ orientation = "horizontal", children, className, ...props }) => {
   return (
      <Flex
         orientation={orientation}
         justify="center"
         align="center"
         className={cn(orientation === "vertical" ? "h-full" : "w-full", className)}
         {...props}
      >
         {children ? (
            <>
               <SeparationBorder orientation={orientation} />
               <Text size="sm" className="px-1">
                  {children}
               </Text>
               <SeparationBorder orientation={orientation} />
            </>
         ) : (
            <SeparationBorder orientation={orientation} />
         )}
      </Flex>
   );
};

export default Separator;
