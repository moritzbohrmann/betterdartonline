import React from "react";

function InputField(props) {
   return (
      <>
         <input
            {...props}
            className={`h-8 w-48 rounded-md border-[1px] border-zinc-900 bg-dark-background px-4 text-white-default outline-none ${props.className}`}
         />
      </>
   );
}

export default InputField;
