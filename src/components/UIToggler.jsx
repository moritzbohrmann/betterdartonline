import React from "react";

function Toggler(props) {
   return (
      <label className="relative z-0 inline-flex cursor-pointer items-center">
         <input
            ref={props.innerRef}
            onChange={(e) => props.onChange(e.target.checked)}
            type="checkbox"
            id="filter"
            value=""
            className="peer sr-only"
         />
         <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-red-500"></div>
         <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{props.after}</span>
      </label>
   );
}

export default Toggler;
