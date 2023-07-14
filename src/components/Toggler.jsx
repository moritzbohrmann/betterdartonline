import React from "react";

function Toggler(props) {
   return (
      <label className="z-0 relative inline-flex items-center cursor-pointer">
         <input onChange={(e) => props.onChange(e.target.checked)} type="checkbox" id="filter" value="" className="sr-only peer" />
         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-button"></div>
         <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{props.after}</span>
      </label>
   );
}

export default Toggler;
