export default {
   theme: {
      dark: {
         type: "dark",
         background: "bg-neutral-950",
         backgroundColor: "bg-neutral-950",
         select: "data-[state=active]:bg-zinc-800",
         separator: "bg-zinc-500",
         icon: "text-zinc-300",
         textColor: {
            default: "text-zinc-300",
            descent: "text-zinc-500",
            light: "text-zinc-800",
            background: "text-neutral-950",
         },
         borderColor: {
            default: "border-zinc-500",
            light: "border-zinc-700",
            positive: "border-green-500",
            negative: "border-red-500",
         },
         buttonColor: {
            default: "bg-amber-500",
            positive: "bg-green-500",
            negative: "bg-red-500",
            neutral: "bg-zinc-800",
         },
      },
      light: {
         type: "light",
         background: "bg-neutral-300",
         backgroundColor: "bg-neutral-200",
         select: "data-[state=active]:bg-zinc-300",
         separator: "bg-zinc-300",
         icon: "text-zinc-800",
         textColor: {
            default: "text-zinc-800",
            descent: "text-zinc-500",
            light: "text-zinc-300",
            background: "text-neutral-200",
         },
         borderColor: {
            default: "border-zinc-700",
            light: "border-zinc-300",
            positive: "border-green-500",
            negative: "border-red-500",
         },
         buttonColor: {
            default: "bg-amber-600",
            positive: "bg-green-600",
            negative: "bg-red-600",
            neutral: "bg-zinc-300",
         },
      },
      rainbow: {
         type: "rainbow",
         background: "bg-gradient-to-br from-rose-400 via-yellow-500 to-blue-400",
         backgroundColor: "bg-gradient-to-br from-rose-400 via-yellow-500 to-blue-400",
         select: "bg-zinc-300",
         separator: "bg-zinc-300",
         textColor: {
            default: "text-zinc-300",
            descent: "text-zinc-500",
            background: "bg-gradient-to-br from-rose-400 via-yellow-500 to-blue-400",
         },
         borderColor: {
            default: "border-zinc-700",
            light: "border-zinc-300",
         },
         buttonColor: {
            default: "bg-amber-600",
            positive: "bg-green-600",
            negative: "bg-red-600",
         },
      },
   },
};
