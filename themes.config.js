export default {
   theme: {
      dark: {
         type: "dark",
         background: "bg-dark-background",
         backgroundColor: "bg-dark-background",
         select: "bg-zinc-900",
         separator: "bg-zinc-500",
         textColor: {
            default: "text-white-default",
            descent: "text-zinc-500",
            button: "text-black-default",
            hover: "hover:brightness-110",
         },
         color: "text-white-default",
         windowColor: "bg-dark-window",
         borderColor: {
            light: "border-zinc-900",
            heavy: "border-zinc-500",
         },
      },
      light: {
         type: "light",
         background: "bg-zinc-200",
         backgroundColor: "bg-light-background",
         select: "bg-zinc-300",
         separator: "bg-zinc-300",
         textColor: {
            default: "text-black-default",
            descent: "text-zinc-300",
            button: "text-white",
            hover: "hover:text-black",
         },
         color: "text-black-default",
         windowColor: "bg-light-window",
         borderColor: {
            light: "border-zinc-300",
            heavy: "border-zinc-700",
         },
      },
   },
};
