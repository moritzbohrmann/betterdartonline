import React from "react";

function InputField(props) {
   return (
      <>
         <input
            ref={props.innerRef}
            id={props.id}
            type="text"
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            className={`h-10 w-11/12 rounded-md bg-dark-input px-4 font-secondary font-semibold text-white-default outline-none ${props.className}`}
            onChange={(e) => props.onChange(e)}
         />
      </>
   );
}

export default InputField;
