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
            maxLength={props.maxLength}
            className={`h-10 w-11/12 rounded-md bg-dark-input px-4 font-secondary font-semibold text-white-default outline-none ${props.className}`}
            onChange={(e) => {
               if (props.onChange instanceof Function) props.onChange(e);
            }}
            onKeyUp={(e) => {
               if (e.key === "Enter") props.onSubmit(e.target.value);
            }}
         />
      </>
   );
}

export default InputField;
