import React, { Children } from "react";
import { Flex } from "./Flex";

const Toggle = React.forwardRef(({ className, children, ...props }, ref) => {
   const [toggled, setToggled] = React.useState(false);

   return (
      <Root isToggled={toggled}>
         <Trigger ref={ref} isToggled={toggled} onClick={() => setToggled(toggled ? false : true)} className={className}>
            {Children.map(children, (child) => {
               return console.log(React.cloneElement(child), { isToggled: toggled });
            })}
         </Trigger>
      </Root>
   );
});

const Root = ({ isToggled, ...props }) => {
   return <Flex isToggled={isToggled}>{props.children}</Flex>;
};

const Trigger = ({ isToggled, children, className, ...props }) => {
   return (
      <div isToggled={isToggled} className={props.className} {...props}>
         {children}
      </div>
   );
};
export default Toggle;
