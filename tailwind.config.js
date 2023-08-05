/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            primary: ["Satoshi", "sans-serif"],
            secondary: ["DM Sans", "sans-serif"],
            sans: ["DM Sans", "sans-serif"],
         },
         textColor: {
            white: {
               default: "#d1d1d1",
            },
            black: {
               default: "#1c1c1c",
            },
            dark: {
               background: "#0a0a0a",
               window: "#21202a",
            },
            light: {
               background: "#f5f5f5",
               window: "#dedfd5",
            },
         },
         backgroundColor: {
            dark: {
               background: "#0a0a0a",
               window: "#0F0F0F",
            },
            light: {
               background: "#f5f5f5",
               window: "#0F0F0F",
            },
         },
         ringColor: {
            dark: {
               background: "#0a0a0a",
               window: "#21202a",
            },
            light: {
               background: "#f5f5f5",
               window: "#0F0F0F",
            },
         },
         borderColor: {
            dark: {
               background: "#0a0a0a",
               window: "#21202a",
               500: "#71717a",
               900: "#18181b",
            },
            light: {
               background: "#f5f5f5",
               window: "#0F0F0F",
               500: "#8e8e85",
               900: "#e7e7e4",
            },
         },

         height: {
            128: "32rem",
            144: "40rem",
            152: "44rem",
            160: "48rem",
            176: "56rem",
            192: "64rem",
         },
         width: {
            112: "24rem",
            128: "32rem",
            144: "40rem",
            152: "44rem",
            160: "48rem",
            176: "56rem",
            192: "64rem",
            208: "72rem",
            224: "80rem",
         },
         keyframes: {
            overlayShow: {
               from: { opacity: 0 },
               to: { opacity: 1 },
            },
            contentShow: {
               from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
               to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
            },
         },
         animation: {
            overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
         },
      },
   },
   plugins: [],
};
