import React from "react";

function InputField(props) {
   return (
      <>
         <input
            id={props.id}
            type="text"
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            className={`w-11/12 h-10 bg-dark-input px-4 rounded-md font-secondary font-semibold text-white-default outline-none ${props.className}`}
            onChange={(e) => props.onChange(e)}
         />
      </>
   );
}

export default InputField;
