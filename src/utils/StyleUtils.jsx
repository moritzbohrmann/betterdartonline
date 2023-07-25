import $ from "jquery";

export const addBlur = (elements = "#homeui-navigation, #homeui-windows") => {
   $(elements).addClass("blur-lg transition-all");
};

export const removeBlur = (elements = "#homeui-navigation, #homeui-windows") => {
   $(elements).removeClass("blur-lg");
};
