/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            primary: ["Satoshi", "sans-serif"],
            secondary: ["proxima nova", "sans-serif"],
         },
         textColor: {
            white: {
               default: "#E0E0E0",
            },
            dark: {
               background: "#19191d",
               window: "#21202a",
            },
         },
         backgroundColor: {
            dark: {
               background: "#19191d",
               window: "#21202a",
               button: "#993bff",
               input: "#17161d",
               title: "#1e1d26",
            },
         },
         borderColor: {
            dark: {
               background: "#19191d",
               window: "#21202a",
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
            128: "32rem",
            144: "40rem",
            152: "44rem",
            160: "48rem",
            176: "56rem",
            192: "64rem",
         },
      },
   },
   plugins: [],
};
